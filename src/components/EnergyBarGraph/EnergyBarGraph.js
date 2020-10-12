import React, { useEffect, useState } from 'react';

import { ResponsiveBar } from '@nivo/bar';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function EnergyBarGraph() {

  const retrievedMonthsIndex = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/RETRIEVED_MONTHS.txt';
  const retrievedYearsIndex = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/RETRIEVED_YEARS.txt';

  const yearlyDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_2020.csv';
  const totalDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_Total.csv';

  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  const [totalData, setTotalData] = useState([]);

  const [displayData, setDisplayData] = useState([]);
  const [timescale, setTimescale] = useState('total');

  useEffect(() => {

    // Retrieve monthly data using the index
    fetch(retrievedMonthsIndex)
    .then((response) => response.text())
    .then(data => {
      // Retrieved month data comes in an array of arrays - [['Oct', '2020'], ['Sep', '2020'] ...]
      // There is an empty element at the end of the array, due to the newlines - we slice it off
      const retrievedMonths = data.split('\n').slice(0, -1).map((line) => line.split('-'));

      const monthRequests = [];
      const monthsRetrieved = [];
      retrievedMonths.map(
        (retrieved) => {
          const month = retrieved[0];
          const year = retrieved[1];

          monthsRetrieved.push([month, year]);

          const monthlyDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_' + month + '_' + year + '.csv';
          monthRequests.push(fetch(monthlyDataURL))
        }
      );

      // Bundle all fetch requests together and handle them
      Promise.all(monthRequests)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.text()));
      })
      .then((data) => {
        // Trimming and formatting retrieved data - a month is composed of an array of dictionaries, each dict representing a day with date and kWh properties
        return data.map(
          (datum) => {
            return datum
            .split('\n')
            .slice(1)
            .map((day) => day.split(';'))
            .map((day) => {
              return { date: day[0].slice(0, -3), kWh: parseFloat(day[1]) };
            })
            .filter((day) => !Number.isNaN(day.kWh));
          }
        )

      })
      .then(
        (data) => {
          const retrievedMonthlyData = {};

          monthsRetrieved.map((date, i) => {
            const month = date[0];
            const year = date[1];
            const csvData = data[i];
            retrievedMonthlyData[year] = { ...retrievedMonthlyData[year] }
            retrievedMonthlyData[year][month] = csvData;
          });
          console.log(retrievedMonthlyData);
          setMonthlyData(retrievedMonthlyData);
        }
      );
    });


    // Retrieve yearly data
    fetch(retrievedYearsIndex)
    .then((response) => response.text())
    .then(data => {
      // There is an empty element at the end of the array, due to the newlines - we slice it off
      const retrievedYears = data.split('\n').slice(0, -1);

      const yearRequests = [];
      const yearsRetrieved = [];
      retrievedYears.map(
        (year) => {

          yearsRetrieved.push(year);

          const yearlyDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_' + year + '.csv';
          yearRequests.push(fetch(yearlyDataURL))
        }
      );
      

      Promise.all(yearRequests)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.text()));
      })
      .then((data) => {
        return data.map(
          (datum) => {
            return datum
            .split('\n')
            .slice(1)
            .map((day) => day.split(';'))
            .map((day) => {
              return { date: day[0].slice(0, -3), kWh: parseFloat(day[1]) };
            });
          }
        )

      })
      .then(
        (data) => {
          const retrievedYearlyData = {};

          yearsRetrieved.map((year, i) => {
            const csvData = data[i];
            retrievedYearlyData[year] = csvData;
          });
          console.log(retrievedYearlyData);
          setMonthlyData(retrievedYearlyData);
        }
      )

    });


    fetch(totalDataURL)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = data
          .split('\n')
          .slice(1)
          .map((day) => day.split(';'))
          .map((day) => {
            return { date: day[0], kWh: parseFloat(day[1]) };
          });
        setTotalData(parsedData);
      });
  }, []);

  const timeData = (() => {
    if (timescale === 'month') return monthlyData;
    if (timescale === 'year') return yearlyData;
    if (timescale === 'total') return totalData;
    return totalData;
  })();

  // Setting relative max values for coloring the bars - i.e. if a month has 25 kWh production, it would be completely white
  const graphTimeScale = {
    month: 25,
    year: 500,
    total: 6000,
  };

  return (
    <div style={{ height: 1000 }}>
      <ResponsiveBar
        data={timeData}
        keys={['kWh']}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0}
        colors={(bar) => `hsl(0, 0%, ${(bar.value / graphTimeScale[timescale]) * 100}%)`}
        // colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Day',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Total Yield (kWh)',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        enableLabel
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 2.0]] }}
        animate
        motionStiffness={90}
        motionDamping={15}
        onClick={() => {
          if (timescale === 'year') setTimescale('month');
          if (timescale === 'total') setTimescale('year');
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (timescale === 'month') setTimescale('year');
          if (timescale === 'year') setTimescale('total');
        }}
      >
        Back
      </button>
    </div>
  );
}

export default EnergyBarGraph;

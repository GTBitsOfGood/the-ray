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

  const totalDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_Total.csv';

  const [monthlyData, setMonthlyData] = useState({});
  const [yearlyData, setYearlyData] = useState({});
  const [totalData, setTotalData] = useState([]);

  const [displayDate, setDisplayDate] = useState({});
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
          setYearlyData(retrievedYearlyData);
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
    if (timescale === 'month') {
      return monthlyData[displayDate.year][displayDate.month];
    }
    if (timescale === 'year') {
      return yearlyData[displayDate.year];
    }
    if (timescale === 'total') {
      return totalData;
    }
    return totalData;
  })();


  // Setting relative max values for coloring the bars - i.e. if a month has 25 kWh production, it would be completely white
  const graphTimeScale = {
    month: 25,
    year: 500,
    total: 6000,
  };

  const legendTime = (() => {
    if (timescale === 'total') return 'Year';
    if (timescale === 'year') return 'Month';
    if (timescale === 'month') return 'Day';
    return 'Date';
  })();

  const graphTitle = (() => {
    if (timescale === 'total') return 'Power produced by PV4EV';
    if (timescale === 'year') return 'Power produced per month in ' + displayDate.year;
    if (timescale === 'month') return 'Power produced per day in ' + displayDate.month + ' ' + displayDate.year;
    return 'Power produced by PV4EV';
  })();


  return (
    <div style={{ height: 1000 }}>
      <h1>{graphTitle}</h1>
      <button
        type="button"
        onClick={() => {
          // If user has clicked on a specific year, do not lose the data - otherwise, default to current year
          if (!('year' in displayDate)) setDisplayDate({ 'year': parseInt(new Date().getFullYear())})
          if (!('month' in displayDate)) setDisplayDate({ 'month': months[parseInt(new Date().getMonth())]})
          setTimescale('month');
        }}
      >
        Month
      </button>
      <button
        type="button"
        onClick={() => {
          // If user has clicked on a specific year, do not lose the data - otherwise, default to current year
          if (!('year' in displayDate)) setDisplayDate({ 'year': parseInt(new Date().getFullYear())})
          setTimescale('year');
        }}
      >
        Year
      </button>
      <button
        type="button"
        onClick={() => {
          setTimescale('total');
        }}
      >
        Total
      </button>
      <ResponsiveBar
        data={timeData}
        keys={['kWh']}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 80, left: 100 }}
        padding={0.3}
        // colors={(bar) => `hsl(0, 0%, ${(bar.value / graphTimeScale[timescale]) * 100}%)`}
        // colors={{ scheme: 'nivo' }}
        colors={() => `#092342`} // The Ray's Deep Ocean color
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legend: `${legendTime}`,
          legendPosition: 'middle',
          legendOffset: 60,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legend: 'Total Yield (kWh)',
          legendPosition: 'middle',
          legendOffset: -64,
        }}
        enableLabel={false}
        animate
        motionStiffness={90}
        motionDamping={15}
        onClick={(event) => {
          console.log("CLICK EVENT");
          console.log(event);
          if (timescale === 'year') {
            setDisplayDate({
              ...displayDate,
              'month': event.data.date,
            })
            setTimescale('month');
          }
          if (timescale === 'total') {
            setDisplayDate({
              'year': event.data.date,
            })
            setTimescale('year');
          }
        }}

        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 18,
              }
            },

            legend: {
              text: {
                fontSize: 20,
                fontWeight: 'bold',
              }
            }
          }
        }}
      />
    </div>
  );
}

export default EnergyBarGraph;

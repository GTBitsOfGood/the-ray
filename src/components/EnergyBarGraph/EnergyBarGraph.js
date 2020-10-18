import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Bar } from '@nivo/bar';
import TimescaleButtons from './TimescaleButtons';

function EnergyBarGraph(props) {
  const { height, width } = props;

  const retrievedMonthsIndex =
    'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/RETRIEVED_MONTHS.txt';
  const retrievedYearsIndex = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/RETRIEVED_YEARS.txt';

  const totalDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_Total.csv';

  const [monthlyData, setMonthlyData] = useState({});
  const [yearlyData, setYearlyData] = useState({});
  const [totalData, setTotalData] = useState([]);

  const [displayInfo, setDisplayInfo] = useState({
    timescale: 'total',
  });

  useEffect(() => {
    // Retrieve monthly data using the index
    fetch(retrievedMonthsIndex)
      .then((response) => response.text())
      .then((retrievedMonthData) => {
        // Retrieved month data comes in an array of arrays - [['Oct', '2020'], ['Sep', '2020'] ...]
        // There is an empty element at the end of the array, due to the newlines - we slice it off
        const retrievedMonths = retrievedMonthData
          .split('\n')
          .slice(0, -1)
          .map((line) => line.split('-'));

        const monthRequests = [];
        const monthsRetrieved = [];
        retrievedMonths.forEach((retrieved) => {
          const month = retrieved[0];
          const year = retrieved[1];

          monthsRetrieved.push([month, year]);

          const monthlyDataURL = `https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_${month}_${year}.csv`;
          monthRequests.push(fetch(monthlyDataURL));
        });

        // Bundle all fetch requests together and handle them
        Promise.all(monthRequests)
          .then((responses) => {
            return Promise.all(responses.map((response) => response.text()));
          })
          .then((data) => {
            // Trimming and formatting retrieved data
            // A month is composed of an array of dicts, each representing a day with date and kWh properties
            return data.map((datum) => {
              return datum
                .split('\n')
                .slice(1)
                .map((day) => day.split(';'))
                .map((day) => {
                  return { date: day[0].slice(0, -3), kWh: parseFloat(day[1]) };
                })
                .filter((day) => !Number.isNaN(day.kWh));
            });
          })
          .then((data) => {
            const retrievedMonthlyData = {};

            monthsRetrieved.forEach((date, i) => {
              const month = date[0];
              const year = date[1];
              const csvData = data[i];
              retrievedMonthlyData[year] = { ...retrievedMonthlyData[year] };
              retrievedMonthlyData[year][month] = csvData;
            });
            setMonthlyData(retrievedMonthlyData);
          });
      });

    // Retrieve yearly data
    fetch(retrievedYearsIndex)
      .then((response) => response.text())
      .then((retrievedYearsData) => {
        // There is an empty element at the end of the array, due to the newlines - we slice it off
        const retrievedYears = retrievedYearsData.split('\n').slice(0, -1);

        const yearRequests = [];
        const yearsRetrieved = [];
        retrievedYears.forEach((year) => {
          yearsRetrieved.push(year);

          const yearlyDataURL = `https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_${year}.csv`;
          yearRequests.push(fetch(yearlyDataURL));
        });

        Promise.all(yearRequests)
          .then((responses) => {
            return Promise.all(responses.map((response) => response.text()));
          })
          .then((data) => {
            return data.map((datum) => {
              return datum
                .split('\n')
                .slice(1)
                .map((day) => day.split(';'))
                .map((day) => {
                  return { date: day[0].slice(0, -3), kWh: parseFloat(day[1]) };
                });
            });
          })
          .then((data) => {
            const retrievedYearlyData = {};

            yearsRetrieved.forEach((year, i) => {
              const csvData = data[i];
              retrievedYearlyData[year] = csvData;
            });
            setYearlyData(retrievedYearlyData);
          });
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
    if (displayInfo.timescale === 'month') {
      return monthlyData[displayInfo.year][displayInfo.month];
    }
    if (displayInfo.timescale === 'year') {
      return yearlyData[displayInfo.year];
    }
    if (displayInfo.timescale === 'total') {
      return totalData;
    }
    return totalData;
  })();

  const legendTime = (() => {
    if (displayInfo.timescale === 'total') return 'Year';
    if (displayInfo.timescale === 'year') return 'Month';
    if (displayInfo.timescale === 'month') return 'Day';
    return 'Date';
  })();

  const graphTitle = (() => {
    if (displayInfo.timescale === 'total') return 'Power produced by PV4EV';
    if (displayInfo.timescale === 'year') return `Power produced per month in ${displayInfo.year}`;
    if (displayInfo.timescale === 'month') return `Power produced per day in ${displayInfo.month} ${displayInfo.year}`;
    return 'Power produced by PV4EV';
  })();

  return (
    <div style={{ height: 800 }}>
      <h1>{graphTitle}</h1>
      <TimescaleButtons currentDisplayInfo={displayInfo} changeDisplayInfo={setDisplayInfo} />
      <Bar
        height={height}
        width={width}
        data={timeData}
        keys={['kWh']}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 80, left: 120 }}
        padding={0.3}
        colors={() => `#873856`} // The Ray's Mauvelous color
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: `${legendTime}`,
          legendPosition: 'middle',
          legendOffset: 60,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Yield (kWh)',
          legendPosition: 'middle',
          legendOffset: -80,
        }}
        enableLabel={false}
        animate
        motionStiffness={90}
        motionDamping={15}
        onClick={(event) => {
          if (displayInfo.timescale === 'year') {
            setDisplayInfo({
              ...displayInfo,
              month: event.data.date,
              timescale: 'month',
            });
          }
          if (displayInfo.timescale === 'total') {
            setDisplayInfo({
              year: event.data.date,
              timescale: 'year',
            });
          }
        }}
        onMouseEnter={(_, event) => {
          const { style } = event.target;
          style.transition = 'fill 0.4s';
          style.fill = '#D35C58';
        }}
        onMouseLeave={(_, event) => {
          const { style } = event.target;
          style.transition = 'fill 0.2s';
          style.fill = '#873856';
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 18,
              },
            },

            legend: {
              text: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
          },
        }}
      />
    </div>
  );
}

EnergyBarGraph.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

EnergyBarGraph.defaultProps = {
  height: 1000,
  width: 2000,
};

export default EnergyBarGraph;

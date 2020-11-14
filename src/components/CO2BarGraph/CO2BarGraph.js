import React, { useEffect, useState } from 'react';

import { ResponsiveBar } from '@nivo/bar';
import TimescaleButtons from './TimescaleButtons';
import './CO2BarGraph.css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function CO2BarGraph() {
  const retrievedMonthsIndex =
    'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/co2/RETRIEVED_MONTHS.txt';
  const retrievedOverallMonthIndex =
    'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/co2/RETRIEVED_OVERALL_MONTHS.txt';
  const retrievedOverallYearIndex =
    'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/co2/RETRIEVED_YEARS.txt';

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
        // Retrieved month data comes in an array of arrays - [['1', '2020'], ['2', '2020'] ...]
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

          const monthlyDataURL = `https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/co2/CO2_${month}_${year}.csv`;
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
                  return { date: day[0].slice(0, -3), kg: parseFloat(day[1]) };
                })
                .filter((day) => !Number.isNaN(day.kWh));
            });
          })
          .then((data) => {
            const retrievedMonthlyData = {};

            monthsRetrieved.forEach((date, i) => {
              const month = months[date[0] - 1];
              const year = date[1];
              const csvData = data[i];
              retrievedMonthlyData[year] = { ...retrievedMonthlyData[year] };
              retrievedMonthlyData[year][month] = csvData;
            });
            setMonthlyData(retrievedMonthlyData);
          });
      });

    // Retrieve overall monthly data
    fetch(retrievedOverallMonthIndex)
      .then((response) => response.text())
      .then((retrievedMonthsOverallData) => {
        // There is an empty element at the end of the array, due to the newlines - we slice it off
        const retrievedOverallMonths = retrievedMonthsOverallData
          .split('\n')
          .slice(0, -1)
          .map((line) => line.split('-'));

        const overallMonthsRequests = [];
        const overallMonthsRetrieved = [];
        retrievedOverallMonths.forEach((retrieved) => {
          const month = retrieved[0];
          const year = retrieved[1];

          overallMonthsRetrieved.push([month, year]);

          const monthlyOverallDataURL = `https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/co2/CO2_Overall_${month}_${year}.csv`;
          overallMonthsRequests.push(fetch(monthlyOverallDataURL));
        });

        // Bundle all fetch requests together and handle them
        Promise.all(overallMonthsRequests)
          .then((responses) => {
            return Promise.all(responses.map((response) => response.text()));
          })
          .then((data) => {
            // Trimming and formatting retrieved data
            return data.map((datum) => {
              const date = datum.split('\n')[0].split('/')[2].slice(1, 4);
              const kg = parseFloat(
                datum
                  .split('\n')
                  .slice(1, 2)
                  .map((month) => month.split(';'))[0][1]
              );

              return { date, kg };
            });
          })
          .then((data) => {
            const retrievedMonthlyData = {};

            overallMonthsRetrieved.forEach((date, i) => {
              const year = date[1];
              const csvData = data[i];
              retrievedMonthlyData[year] = retrievedMonthlyData[year] || [];
              retrievedMonthlyData[year].push(csvData);
            });

            Object.keys(retrievedMonthlyData).forEach((key) => {
              retrievedMonthlyData[key].reverse();
            });
            setYearlyData(retrievedMonthlyData);
          });
      });

    // Retrieve total data
    fetch(retrievedOverallYearIndex)
      .then((response) => response.text())
      .then((retrievedYearsOverallData) => {
        // There is an empty element at the end of the array, due to the newlines - we slice it off
        const retrievedOverallYears = retrievedYearsOverallData.split('\n').slice(0, -1);

        const overallYearsRequests = [];
        const overallYearsRetrieved = [];
        retrievedOverallYears.forEach((retrieved) => {
          const year = retrieved;

          overallYearsRetrieved.push(year);

          const monthlyOverallDataURL = `https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/co2/CO2_Overall_${year}.csv`;
          overallYearsRequests.push(fetch(monthlyOverallDataURL));
        });

        // Bundle all fetch requests together and handle them
        Promise.all(overallYearsRequests)
          .then((responses) => {
            return Promise.all(responses.map((response) => response.text()));
          })
          .then((data) => {
            // Trimming and formatting retrieved data
            return data.map((datum) => {
              const date = datum.split('\n')[0].split('/')[2].slice(10, 14);
              const kg = parseFloat(
                datum
                  .split('\n')
                  .slice(1, 2)
                  .map((month) => month.split(';'))[0][2]
              );

              return { date, kg };
            });
          })
          .then((data) => {
            const retrievedYearlyData = [];

            overallYearsRetrieved.forEach((date, i) => {
              const csvData = data[i];
              retrievedYearlyData.push(csvData);
            });
            retrievedYearlyData.reverse();
            setTotalData(retrievedYearlyData);
          });
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
    if (displayInfo.timescale === 'total') return 'CO2 saved by The Ray';
    if (displayInfo.timescale === 'year') return `CO2 saved per month in ${displayInfo.year}`;
    if (displayInfo.timescale === 'month') return `CO2 saved per day in ${displayInfo.month} ${displayInfo.year}`;
    return 'CO2 saved';
  })();

  return (
    <div className="graph-body">
      <h1 className="graph-title">{graphTitle}</h1>
      <TimescaleButtons currentDisplayInfo={displayInfo} changeDisplayInfo={setDisplayInfo} />
      <ResponsiveBar
        data={timeData}
        keys={['kg']}
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
          legend: 'CO2 Saved (kg)',
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

export default CO2BarGraph;

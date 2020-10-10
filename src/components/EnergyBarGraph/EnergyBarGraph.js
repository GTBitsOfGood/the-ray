import React, { useEffect, useState } from 'react';

import { ResponsiveBar } from '@nivo/bar';

function EnergyBarGraph() {
  const monthlyDataURL =
    'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_Month.csv';
  const yearlyDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_Year.csv';
  const totalDataURL = 'https://raw.githubusercontent.com/GTBitsOfGood/the-ray-crawler/data/Energy_and_Power_Total.csv';

  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  const [totalData, setTotalData] = useState([]);

  const [timescale, setTimescale] = useState('total');

  useEffect(() => {
    fetch(monthlyDataURL)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = data
          .split('\n')
          .slice(1)
          .map((day) => day.split(';'))
          .map((day) => {
            return { date: day[0].slice(0, -3), kWh: parseFloat(day[1]) };
          });
        setMonthlyData(parsedData);
      });

    fetch(yearlyDataURL)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = data
          .split('\n')
          .slice(1)
          .map((day) => day.split(';'))
          .map((day) => {
            return { date: day[0].slice(0, -3), kWh: parseFloat(day[1]) };
          });
        setYearlyData(parsedData);
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

  return (
    <div style={{ height: 1000 }}>
      <ResponsiveBar
        data={timeData}
        keys={['kWh']}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0}
        // colors={(bar) => "hsl(0, 0%, " + (bar.value / 25) * 100 + "%)"}
        colors={{ scheme: 'nivo' }}
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

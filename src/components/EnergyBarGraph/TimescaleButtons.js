import React from 'react';
import PropTypes from 'prop-types';

import './TimescaleButtons.css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function TimescaleButtons(props) {
  const { currentDisplayInfo, changeDisplayInfo } = props;

  return (
    <div>
      <button
        type="button"
        className={`timescale-button ${currentDisplayInfo.timescale === 'month' ? 'selected-button' : ''}`}
        onClick={() => {
          // If user has clicked on a specific year, do not lose the data - otherwise, default to current year
          changeDisplayInfo({
            ...currentDisplayInfo,
            year: 'year' in currentDisplayInfo ? currentDisplayInfo.year : Number(new Date().getFullYear()),
            month: 'month' in currentDisplayInfo ? currentDisplayInfo.month : months[Number(new Date().getMonth())],
            timescale: 'month',
          });
        }}
      >
        Month
      </button>
      <button
        type="button"
        className={`timescale-button ${currentDisplayInfo.timescale === 'year' ? 'selected-button' : ''}`}
        onClick={() => {
          // If user has clicked on a specific year, do not lose the data - otherwise, default to current year
          changeDisplayInfo({
            ...currentDisplayInfo,
            year: 'year' in currentDisplayInfo ? currentDisplayInfo.year : Number(new Date().getFullYear()),
            timescale: 'year',
          });
        }}
      >
        Year
      </button>
      <button
        type="button"
        className={`timescale-button ${currentDisplayInfo.timescale === 'total' ? 'selected-button' : ''}`}
        onClick={() => {
          changeDisplayInfo({
            ...currentDisplayInfo,
            timescale: 'total',
          });
        }}
      >
        Total
      </button>
    </div>
  );
}

TimescaleButtons.propTypes = {
  currentDisplayInfo: PropTypes.shape({
    timescale: PropTypes.string.isRequired,
    month: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  changeDisplayInfo: PropTypes.func.isRequired,
};

export default TimescaleButtons;

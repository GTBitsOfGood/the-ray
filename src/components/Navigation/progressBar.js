import React from 'react';
import PropTypes from 'prop-types';

import './progressBar.css';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100vw',
    borderRadius: 0,
    margin: 0,
    position: 'absolute',
    bottom: 0,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    transition: 'width 1s ease-in-out',
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles} className="progress">
      <div style={fillerStyles}>{/* <span style={labelStyles}>{`${completed}%`}</span> */}</div>
    </div>
  );
};

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  completed: PropTypes.number,
};

ProgressBar.defaultProps = {
  bgcolor: '#FFFFFF',
  completed: 0,
};

export default ProgressBar;

import React, { useEffect, useState } from 'react';
import '../../../static/css/AnimatedNumber.css';
import PropTypes from 'prop-types';

function sineProgress(start, target, progress) {
  return (target - start) * ((Math.sin(progress * Math.PI - Math.PI / 2) + 1) / 2.0) + start;
}

function CrossBrowserAnimatedNumber(props) {
  const { start, target, pageIndex, transitionTime, percentage } = props;

  const [currTime, setCurrTime] = useState(0);

  const currNum = Math.round(sineProgress(start, target, currTime / transitionTime));

  useEffect(() => {
    const listener = document.addEventListener('page-scroll', (e) => {
      if (pageIndex === e.detail) {
        setCurrTime(0);
      }
    });
    return () => {
      document.removeEventListener(listener);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currTime < transitionTime) {
        setCurrTime(currTime + 10);
      }
    }, 10);
    return () => {
      clearTimeout(timeout);
    };
  }, [currTime]);

  return (
    <p style={{ 'font-size': '288px', 'margin-bottom': '150px', 'margin-top': '180px' }}>
      {currNum.toString() + (percentage ? '%' : '')}
    </p>
  );
}

export default CrossBrowserAnimatedNumber;

CrossBrowserAnimatedNumber.propTypes = {
  pageIndex: PropTypes.number,
  transitionTime: PropTypes.number,
  start: PropTypes.number,
  target: PropTypes.number,
  percentage: PropTypes.bool,
};

CrossBrowserAnimatedNumber.defaultProps = {
  pageIndex: -2,
  transitionTime: 2000,
  start: 0,
  target: 80,
  percentage: false,
};

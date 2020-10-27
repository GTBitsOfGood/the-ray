import React, { useEffect, useRef, useState } from 'react';
import '../../../static/css/AnimatedNumber.css';
import PropTypes from 'prop-types';

function AnimatedNumber(props) {
  const { start, target, pageIndex, transitionTime, resetTime, transitionDelay, percentage } = props;
  const numberContainer = useRef(null);

  const [style, setStyle] = useState({
    transition: `--num ${transitionTime}ms ease-in-out`,
    counterReset: 'num var(--num)',
    transitionDelay: `${transitionDelay}ms`,
    '--num': `${start}`,
  });

  const resetNum = () => {
    const newStyle = { ...style };
    newStyle['--num'] = `${start}`;
    setStyle(newStyle);
  };

  const enableAnimation = () => {
    const newStyle = { ...style };
    newStyle.transition = `--num ${transitionTime}ms ease-in-out`;
    newStyle.transitionDelay = `${transitionDelay}ms`;
    setStyle(newStyle);
  };

  const resetOrAnimate = (num) => {
    const newStyle = { ...style };
    if (num === pageIndex) {
      newStyle['--num'] = `${target}`;
    } else if (num === pageIndex - 1 || num === pageIndex + 1) {
      newStyle.transition = `--num 0ms ease-in-out`;
      newStyle.transitionDelay = `0ms`;
      const timeout = setTimeout(resetNum, resetTime);
      setTimeout(enableAnimation, resetTime + 10);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      newStyle['--num'] = `${start}`;
    }
    setStyle(newStyle);
    return () => {};
  };

  useEffect(() => {
    resetOrAnimate(0);
    const listener = document.addEventListener('page-scroll', (e) => {
      resetOrAnimate(e.detail);
    });
    return () => {
      document.removeEventListener(listener);
    };
  }, []);

  return (
    <div ref={numberContainer} className="animated-number" style={style} percentage-sign={`${percentage ? '%' : ''}`} />
  );
}

AnimatedNumber.propTypes = {
  pageIndex: PropTypes.number,
  transitionTime: PropTypes.number,
  transitionDelay: PropTypes.number,
  resetTime: PropTypes.number,
  start: PropTypes.number,
  target: PropTypes.number,
  percentage: PropTypes.bool,
};

AnimatedNumber.defaultProps = {
  pageIndex: -2,
  transitionTime: 2000,
  transitionDelay: 250,
  resetTime: 1000,
  start: 0,
  target: 80,
  percentage: false,
};

export default AnimatedNumber;

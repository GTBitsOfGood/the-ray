import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function ParallaxComponent(props) {
  const { children, transitionTime, transitionDelay, resetTime, pageIndex, styles } = props;

  const parallaxContainer = useRef(null);

  const disableAnimation = () => {
    parallaxContainer.current.style.transition = `transform 0ms ease-in-out`;
    parallaxContainer.current.style.transitionDelay = `0ms`;
  };

  const slideDown = () => {
    parallaxContainer.current.style.transform = 'translate(0,200px)';
  };

  const enableAnimation = () => {
    parallaxContainer.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
    parallaxContainer.current.style.transitionDelay = `${transitionDelay}ms`;
  };

  const resetOrScroll = (num) => {
    if (num === pageIndex) {
      parallaxContainer.current.style.transform = 'translate(0,0)';
    } else if (num === pageIndex - 1 || num === pageIndex + 1) {
      disableAnimation();
      const timeout = setTimeout(slideDown, resetTime);
      setTimeout(enableAnimation, resetTime + 10);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      parallaxContainer.current.style.transform = 'translate(0,200)';
    }
    return () => {};
  };

  const resetWrapper = (e) => {
    resetOrScroll(e.detail);
  };

  useEffect(() => {
    resetOrScroll(0);
    document.addEventListener('page-scroll', resetWrapper);
    return () => {
      document.removeEventListener('page-scroll', resetWrapper);
    };
  }, []);

  return (
    <div
      ref={parallaxContainer}
      className="parallax-scroll"
      style={{
        ...styles,
        ...{
          // position: 'absolute',
          transform: `translate(0, 200px)`,
          transition: `transform ${transitionTime}ms ease-in-out`,
          transitionDelay: `${transitionDelay}ms`,
          width: '100%',
          // height: '100%',
          zIndex: '1',
        },
      }}
    >
      {children}
    </div>
  );
}

ParallaxComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(React.Component), React.Component]),
  pageIndex: PropTypes.number,
  transitionTime: PropTypes.number,
  transitionDelay: PropTypes.number,
  resetTime: PropTypes.number,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ParallaxComponent.defaultProps = {
  children: [],
  pageIndex: -2,
  transitionTime: 1000,
  transitionDelay: 100,
  resetTime: 1000,
  styles: {},
};

export default ParallaxComponent;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function ParallaxComponent(props) {
  const { children, shouldParallaxScroll, transitionTime, transitionDelay, resetTime } = props;

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

  useEffect(() => {
    parallaxContainer.current.style.transform = 'translate(0,0)';
    if (!shouldParallaxScroll) {
      disableAnimation();
      const timeout = setTimeout(slideDown, resetTime);
      setTimeout(enableAnimation, resetTime + 10);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, [shouldParallaxScroll, resetTime]);

  return (
    <div
      ref={parallaxContainer}
      className="parallax-scroll"
      style={{
        transform: `translate(0, ${shouldParallaxScroll ? 0 : 200}px)`,
        transition: `transform ${transitionTime}ms ease-in-out`,
        transitionDelay: `${transitionDelay}ms`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}

ParallaxComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(React.Component), React.Component]),
  shouldParallaxScroll: PropTypes.bool,
  transitionTime: PropTypes.number,
  transitionDelay: PropTypes.number,
  resetTime: PropTypes.number,
};

ParallaxComponent.defaultProps = {
  children: [],
  shouldParallaxScroll: false,
  transitionTime: 1000,
  transitionDelay: 100,
  resetTime: 1000,
};

export default ParallaxComponent;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function ParallaxComponent(props) {
  const { children, shouldParallaxScroll, transitionTime, transitionDelay } = props;

  const parallaxContainer = useRef(null);

  const slideDown = () => {
    parallaxContainer.current.style.transform = 'translate(0,200px)';
  };

  useEffect(() => {
    parallaxContainer.current.style.transform = 'translate(0,0)';
    if (!shouldParallaxScroll) {
      const timeout = setTimeout(slideDown, transitionTime);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, [shouldParallaxScroll, transitionTime]);

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
};

ParallaxComponent.defaultProps = {
  children: [],
  shouldParallaxScroll: false,
  transitionTime: 1000,
  transitionDelay: 100,
};

export default ParallaxComponent;

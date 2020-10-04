import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function ParallaxComponent(props) {
  const { children, shouldparallaxscroll, transitionTime, transitionDelay } = props;

  const parallaxContainer = useRef(null);

  useEffect(() => {
    if (shouldparallaxscroll) {
      parallaxContainer.current.style.marginTop = `0px`;
    }
  }, [shouldparallaxscroll]);

  return (
    <div
      ref={parallaxContainer}
      style={{
        marginTop: `${shouldparallaxscroll ? 100 : 0}`,
        transition: `margin-top ${transitionTime}ms ease-in-out`,
        transitionDelay: `${transitionDelay}ms`,
      }}
    >
      {children}
    </div>
  );
}

ParallaxComponent.propTypes = {
  children: PropTypes.arrayOf(React.Component),
  shouldparallaxscroll: PropTypes.bool,
  transitionTime: PropTypes.number,
  transitionDelay: PropTypes.number,
};

ParallaxComponent.defaultProps = {
  children: [],
  shouldparallaxscroll: false,
  transitionTime: 1000,
  transitionDelay: 100,
};

export default ParallaxComponent;

import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/what-we-do.css';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const WhatWeDo = (props) => {
  const { isActive } = props;
  return (
    <div className="what-background">
      <div className="what-body">
        <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
          <p className="what-text">What We Do</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

WhatWeDo.propTypes = {
  isActive: PropTypes.bool,
};

WhatWeDo.defaultProps = {
  isActive: false,
};

export default WhatWeDo;

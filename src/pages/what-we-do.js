import React from 'react';
import '../static/css/what-we-do.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const WhatWeDo = (props) => {
  const { pageIndex } = props;
  return (
    <div className="what-background">
      <div className="what-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <p className="what-text">What We Do</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

WhatWeDo.propTypes = {
  pageIndex: PropTypes.number,
};

WhatWeDo.defaultProps = {
  pageIndex: -2,
};

export default WhatWeDo;

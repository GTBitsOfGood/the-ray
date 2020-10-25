import React from 'react';
import '../static/css/Title.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Title = (props) => {
  const { pageIndex } = props;
  return (
    <div className="title-background">
      <div className="title-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <p className="title-border-text">WheelRight</p>
          <p className="theray-text">THE RAY</p>
          <p className="title-text">WheelRight</p>
          <p className="tiresafety-title-text">TIRE SAFETY CHECK STATION</p>
          <p className="scroll-title-text">scroll or swipe up to start the experience</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Title.propTypes = {
  pageIndex: PropTypes.number,
};

Title.defaultProps = {
  pageIndex: -2,
};

export default Title;

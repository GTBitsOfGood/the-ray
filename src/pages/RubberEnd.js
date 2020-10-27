import React from 'react';
import '../static/css/RubberEnd.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const RubberEnd = (props) => {
  const { pageIndex } = props;
  return (
    <div className="rubber-background">
      <div className="rubber-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <p className="rubber-text">Time to put the rubber to the road</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

RubberEnd.propTypes = {
  pageIndex: PropTypes.number,
};

RubberEnd.defaultProps = {
  pageIndex: -2,
};

export default RubberEnd;

import React from 'react';
import '../static/css/Title.css';
import '../static/css/commons.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import arrow from '../components/Navigation/arrow_downward_24px.svg';

const Title = (props) => {
  const { pageIndex, setProject } = props;
  return (
    <div className="title-background">
      <div className="title-body">
        <button
          type="button"
          className="arrow-button"
          onClick={() => setProject('Title')}
          onTouchStart={() => setProject('Title')}
        >
          <img className="back-arrow" src={arrow} alt="back" />
        </button>
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <div className="uppertext">
            <p className="title-border-text">WheelRight</p>
          </div>
          <div className="wheelright-subheading">
            <p className="theray-text">THE RAY</p>
            <p className="title-text">WheelRight</p>
            <p className="tiresafety-title-text">TIRE SAFETY CHECK STATION</p>
          </div>
          <p className="scroll-title-text">scroll or swipe up to start the experience</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Title.propTypes = {
  pageIndex: PropTypes.number,
  setProject: PropTypes.func.isRequired,
};

Title.defaultProps = {
  pageIndex: -2,
};

export default Title;

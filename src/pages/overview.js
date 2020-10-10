import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/overview.css';
import Car from '../static/images/full-car.png';
import Graphic from '../static/images/car-graphic.svg';
import Left from '../static/images/left-background.svg';
import Right from '../static/images/right-background.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Overview = (props) => {
  const { isActive } = props;
  return (
    <div className="overview-body">
      <div className="overview-left">
        <img className="overview-left-background" src={Left} alt="Left background" />
        <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
          <img className="overview-left-image" src={Graphic} alt="Car Graphic" />
          <p className="overview-left-text">Tire inflation and monitoring methods are a hassle.</p>
        </ParallaxComponent>
      </div>
      <div className="overview-right">
        <img className="overview-right-image" src={Car} alt="The Ray Car" />
        <img className="overview-right-background" src={Right} alt="Right background" />
        <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
          <p className="overview-right-text">
            WheelRight strives to make this process easier to save time, fuel, money, and most importantly--lives.
          </p>
        </ParallaxComponent>
      </div>
      <div className="overview-text" />
    </div>
  );
};

Overview.propTypes = {
  isActive: PropTypes.bool,
};

Overview.defaultProps = {
  isActive: false,
};

export default Overview;

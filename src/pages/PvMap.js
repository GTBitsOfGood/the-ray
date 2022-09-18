import React from 'react';
import '../static/css/PvMap.css';
import PropTypes from 'prop-types';
import lightbulbs from '../static/images/lightbulbs.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PvMap = ({ pageIndex }) => {
  return (
    <div className="pv-map-container">
      <div className="map-img-container" />
      <div className="pv-map-text-container">
        <div className="pv-map-bulb-container">
          <img className="bulb-img" alt={lightbulbs} src={lightbulbs} />
        </div>
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <div className="pv-map-text">
            <h1>Location</h1>
            <p>
              The Georgia Visitor Information Center in West Point is home to the state’s very first solar-powered PV4EV
              charging station.
            </p>
            <p>
              It’s one giant step toward creating the infrastructure that’s needed to support electric vehicle
              transportation.
            </p>
          </div>
        </ParallaxComponent>
      </div>
    </div>
  );
};

PvMap.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PvMap;

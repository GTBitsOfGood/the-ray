import React from 'react';
import '../static/css/PvMap.css';
import PropTypes from 'prop-types';
import lightbulbs from '../static/images/lightbulbs.svg';
import pvMapImg from '../static/images/TheRayMap.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PvMap = (props) => {
  const { pageIndex } = props;
  return (
    <div className="pv-map-background">
      <div className="pv-map-infobox split">
        <img src={lightbulbs} alt="lightbulbs" />
        <div className="pv-map-textbox">
          <div style={{ marginLeft: '12%' }}>
            <ParallaxComponent pageIndex={pageIndex} transitionDelay={0} transitionTime={1500}>
              <h2 className="pv-text pv-text-bold" style={{ fontSize: '48px', fontWeight: 'bold' }}>
                Location
              </h2>
              <p className="pv-text" style={{ fontSize: '24px', lineHeight: '28.13px' }}>
                The Georgia Visitor Information Center in West Point is home to the state’s very first solar-powered
                PV4EV charging station.
              </p>
              <p className="pv-text" style={{ fontSize: '24px', lineHeight: '28.13px' }}>
                It’s one giant step toward creating the infrastructure that’s needed to support electric vehicle
                transportation.
              </p>
            </ParallaxComponent>
          </div>
        </div>
      </div>
      <div className="split pv-map-imagebox">
        <img width="100%" height="100%" src={pvMapImg} alt="I85 Map" />
      </div>
    </div>
  );
};

PvMap.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PvMap;

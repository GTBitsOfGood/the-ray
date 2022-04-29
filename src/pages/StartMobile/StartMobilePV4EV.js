import React from 'react';
import PropTypes from 'prop-types';
import '../../static/css/StartMobile.css';
import '../../static/css/responsive.css';
import '../../static/css/commons.css';
import greenTriangle from '../../static/images/green-triangle.svg';
import solar from '../../static/images/solar.png';
import pv4evsvg from '../../static/images/pv4ev.svg';

const StartMobilePV4EV = ({ setPv4ev }) => {
  return (
    <div className="start-body-mobile green-background">
      <img className="start-green-triangle" src={greenTriangle} alt="Background" />
      <img className="start-solar-mobile" src={solar} alt="Solar" />
      <img className="pv4ev-bg-svg" src={pv4evsvg} alt="Solar Overlay" />
      <div className="flex-col items-center " style={{ zIndex: 3 }}>
        <>
          <div className="mb-4">
            <p className="start-hollow-text header-xl mb-4">PV4EV</p>
          </div>

          <p className="start-secondary-text header-sm">
            <center>SOLAR-POWERED VEHICLE CHARGING STATION</center>
          </p>
        </>
      </div>
      <button
        type="button"
        className="transparent-button header-sm main-btn"
        onClick={setPv4ev}
        onTouchStart={setPv4ev}
      >
        PV4EV
      </button>
    </div>
  );
};

StartMobilePV4EV.propTypes = {
  setPv4ev: PropTypes.func,
};

StartMobilePV4EV.defaultProps = {
  setPv4ev: () => null,
};

export default StartMobilePV4EV;

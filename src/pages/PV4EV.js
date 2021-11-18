import React from 'react';
import '../static/css/pv4ev.css';
import '../static/css/commons.css';
import PropTypes from 'prop-types';
import greenRectangle from '../static/images/green-rectangle.svg';
import solar from '../static/images/solar.png';
import pv4evsvg from '../static/images/pv4ev.svg';
import arrow from '../components/Navigation/arrow_downward_24px.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

class PV4EV extends React.PureComponent {
  render() {
    const { setProject, pageIndex } = this.props;
    return (
      <div className="pv4ev-body" style={{ backgroundColor: '#4c7d77' }}>
        <button type="button" className="arrow-button" onClick={() => setProject('Title')}>
          <img className="back-arrow" src={arrow} alt="back" />
        </button>
        <img className="pv4ev-background" src={greenRectangle} alt="Background" />
        <img className="pv4ev-solar" src={solar} alt="Solar" />
        <img className="pv4ev-pv4evsvg" src={pv4evsvg} alt="Solar Overlay" />
        <ParallaxComponent pageIndex={pageIndex} transitionDelay={0} transitionTime={1500}>
          <p className="pv4ev-hollow-text">PV4EV</p>
          <div className="flex-col pv4ev-container">
            <p className="pv4ev-title-text">THE RAY</p>
            <p className="pv4ev-main-text">PV4EV</p>
            <p className="pv4ev-secondary-text">
              SOLAR-POWERED ELECTRICAL
              <br />
              VEHICLE CHARGING STATION
            </p>
          </div>
        </ParallaxComponent>
        <p className="pv4ev-scroll-text">scroll up to start the experience</p>
      </div>
    );
  }
}

PV4EV.propTypes = {
  setProject: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
};

export default PV4EV;

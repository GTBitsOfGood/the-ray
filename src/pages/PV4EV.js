import React from 'react';
import '../static/css/pv4ev.css';
import greenRectangle from '../static/images/green-rectangle.svg';
import solar from '../static/images/solar.png';
import pv4evsvg from '../static/images/pv4ev.svg';

class PV4EV extends React.PureComponent {
  render() {
    return (
      <div className="pv4ev-body" style={{ backgroundColor: '#4c7d77' }}>
        <img className="pv4ev-background" src={greenRectangle} alt="Background" />
        <img className="pv4ev-solar" src={solar} alt="Solar" />
        <img className="pv4ev-pv4evsvg" src={pv4evsvg} alt="Solar Overlay" />
        <p className="pv4ev-hollow-text">PV4EV</p>
        <p className="pv4ev-title-text">THE RAY</p>
        <p className="pv4ev-main-text">PV4EV</p>
        <p className="pv4ev-secondary-text">
          SOLAR-POWERED ELECTRICAL
          <br />
          VEHICLE CHARGING STATION
        </p>
        <p className="pv4ev-scroll-text">scroll up to start the experience</p>
      </div>
    );
  }
}

export default PV4EV;

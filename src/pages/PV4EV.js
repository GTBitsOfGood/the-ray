import React from 'react';
import '../static/css/pv4ev.css';
import greenRectangle from '../static/images/green-rectangle.svg';
import solar from '../static/images/solar.png';
import pv4evsvg from '../static/images/pv4ev.svg';

class PV4EV extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <img className="background" src={greenRectangle} alt="Background" />
        <img className="solar" src={solar} alt="Solar" />
        <img className="pv4evsvg" src={pv4evsvg} alt="Solar Overlay" />
        <p className="hollow-text">PV4EV</p>
        <p className="title-text">THE RAY</p>
        <p className="main-text">PV4EV</p>
        <p className="secondary-text">
          SOLAR-POWERED ELECTRICAL
          <br />
          VEHICLE CHARGING STATION
        </p>
        <p className="scroll-text">scroll up to start the experience</p>
      </div>
    );
  }
}

export default PV4EV;

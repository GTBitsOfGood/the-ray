import React from 'react';
import '../static/css/Start.css';
import '../static/css/responsive.css';
import '../static/css/commons.css';
import PropTypes from 'prop-types';
import rayFuture from '../static/images/ray-future.jpg';
import greenRectangle from '../static/images/green-rectangle.svg';
import solar from '../static/images/solar.png';
import pv4evsvg from '../static/images/pv4ev.svg';

class Start extends React.PureComponent {
  constructor() {
    super();
    this.state = { isHovered: 0 };
    this.toggleTitle = this.toggleTitle.bind(this);
    this.toggleWheelright = this.toggleWheelright.bind(this);
    this.togglePV4EV = this.togglePV4EV.bind(this);
  }

  toggleTitle() {
    this.setState({ isHovered: 0 });
  }

  toggleWheelright() {
    this.setState({ isHovered: 1 });
  }

  togglePV4EV() {
    this.setState({ isHovered: 2 });
  }

  render() {
    const { setWheelright, setPv4ev } = this.props;
    const { isHovered } = this.state;
    const getCurrentScreen = () => {
      // return 'solar';
      if (isHovered === 1) return 'wheel';
      if (isHovered === 2) return 'solar';
      return 'home';
    };
    return (
      <div className="start-body">
        {getCurrentScreen() === 'home' && (
          <div className="flex-col items-center mt-auto">
            <img className="start-image" src={rayFuture} alt={rayFuture} />
            <div className="flex">
              <p className="start-text ">
                <span className="header-lg">0</span> DEATHS
              </p>
              <p className="start-text">
                <span className="header-lg">0</span> WASTE
              </p>
              <p className="start-text">
                <span className="header-lg">0</span> IMPACT
              </p>
            </div>
            <p>
              <center>Click on one of the projects below to view interactive info and data visualizations</center>
            </p>
            <div className="start-line1" />
            <div className="start-line2" />
            <div className="start-line3" />
            <div className="start-line4" />
            <div className="start-line5" />
          </div>
        )}

        {getCurrentScreen() === 'wheel' && <div className="start-title-background" />}
        {getCurrentScreen() === 'wheel' && <div className="start-title-sheet" />}
        {getCurrentScreen() === 'wheel' && (
          <div className="start-title-body">
            <p className="start-title-border-text header-xl">WheelRight</p>
            <p className="start-tiresafety-title-text" style={{ top: '40%', left: '30.5%' }}>
              TIRE SAFETY CHECK STATION
            </p>
          </div>
        )}

        {getCurrentScreen() === 'solar' && <div className="start-green-sheet" />}
        {getCurrentScreen() === 'solar' && <div className="start-shadow-sheet" />}
        {getCurrentScreen() === 'solar' && <img className="start-background" src={greenRectangle} alt="Background" />}
        {getCurrentScreen() === 'solar' && <img className="start-solar" src={solar} alt="Solar" />}
        {getCurrentScreen() === 'solar' && <img className="start-pv4evsvg" src={pv4evsvg} alt="Solar Overlay" />}
        {getCurrentScreen() === 'solar' && (
          <div className="flex-col items-center mt-auto" style={{ zIndex: 3 }}>
            <p className="start-hollow-text header-xl">PV4EV</p>
            <p className="start-secondary-text header-sm">
              <center>SOLAR-POWERED VEHICLE CHARGING STATION</center>
            </p>
          </div>
        )}
        <div className="flex button-array">
          <button
            type="button"
            className="start-wheelright start-button"
            onMouseEnter={() => this.toggleWheelright()}
            onMouseLeave={() => this.toggleTitle()}
            onClick={setWheelright}
            style={isHovered === 1 ? { background: 'white' } : {}}
          >
            <p className="start-text" style={getCurrentScreen() === 'wheel' ? { color: 'black' } : {}}>
              WHEELRIGHT
            </p>
          </button>
          <button
            type="button"
            className="start-pv4ev start-button"
            onMouseEnter={() => this.togglePV4EV()}
            onMouseLeave={() => this.toggleTitle()}
            onClick={setPv4ev}
            style={isHovered === 2 ? { background: 'white' } : {}}
          >
            <p className="start-text" style={getCurrentScreen() === 'solar' ? { color: 'black' } : {}}>
              PV4EV
            </p>
          </button>
        </div>
      </div>
    );
  }
}

Start.propTypes = {
  setWheelright: PropTypes.func,
  setPv4ev: PropTypes.func,
};

Start.defaultProps = {
  setWheelright: () => null,
  setPv4ev: () => null,
};

export default Start;

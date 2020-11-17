import React from 'react';
import '../static/css/Start.css';
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
    return (
      <div className="start-body">
        {isHovered === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img className="start-image" src={rayFuture} alt={rayFuture} />
            <div className="start-deaths">
              <p className="start-text">
                <span style={{ fontWeight: 'bold', fontSize: '114px', lineHeight: '134px' }}>0</span> DEATHS
              </p>
            </div>
            <div className="start-center">
              <div className="start-waste">
                <p className="start-text">
                  <span style={{ fontWeight: 'bold', fontSize: '114px', lineHeight: '134px' }}>0</span> WASTE
                </p>
              </div>
            </div>
            <div className="start-impact">
              <p className="start-text">
                <span style={{ fontWeight: 'bold', fontSize: '114px', lineHeight: '134px' }}>0</span> IMPACT
              </p>
            </div>
            <p style={{ position: 'relative', top: '10vh' }}>
              Click on one of the projects below to view interactive info and data visualizations
            </p>
            <div className="start-line1" />
            <div className="start-line2" />
            <div className="start-line3" />
            <div className="start-line4" />
            <div className="start-line5" />
          </div>
        )}

        {isHovered === 1 && (
          <div className="start-title-background">
            <div className="start-title-body">
              <p className="start-title-border-text">WheelRight</p>
              <p className="start-tiresafety-title-text" style={{ top: '40%', left: '30.5%' }}>
                TIRE SAFETY CHECK STATION
              </p>
            </div>
          </div>
        )}

        {isHovered === 2 && (
          <div className="start-body" style={{ backgroundColor: '#4c7d77' }}>
            <img className="start-background" src={greenRectangle} alt="Background" />
            <img className="start-solar" src={solar} alt="Solar" />
            <img className="start-pv4evsvg" src={pv4evsvg} alt="Solar Overlay" />
            <p className="start-hollow-text">PV4EV</p>
            <p className="start-secondary-text" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              SOLAR-POWERED ELECTRICAL
              <br />
              VEHICLE CHARGING STATION
            </p>
          </div>
        )}

        <button
          type="button"
          className="start-wheelright"
          onMouseEnter={() => this.toggleWheelright()}
          onMouseLeave={() => this.toggleTitle()}
          onClick={setWheelright}
          style={isHovered === 1 ? { background: 'white' } : { background: 'transparent' }}
        >
          {isHovered !== 1 ? (
            <p
              className="start-text"
              style={{ left: '12%', top: '-4%', fontWeight: '900', fontSize: '36px', lineHeight: '42px' }}
            >
              WHEELRIGHT
            </p>
          ) : (
            <p
              className="start-text"
              style={{
                left: '12%',
                top: '-4%',
                fontWeight: '900',
                fontSize: '36px',
                lineHeight: '42px',
                color: 'black',
              }}
            >
              WHEELRIGHT
            </p>
          )}
        </button>
        <button
          type="button"
          className="start-pv4ev"
          onMouseEnter={() => this.togglePV4EV()}
          onMouseLeave={() => this.toggleTitle()}
          onClick={setPv4ev}
          style={isHovered === 2 ? { background: 'white' } : { background: 'transparent' }}
        >
          {isHovered !== 2 ? (
            <p
              className="start-text"
              style={{ left: '19%', top: '-4%', fontWeight: '900', fontSize: '36px', lineHeight: '42px' }}
            >
              PV4EV
            </p>
          ) : (
            <p
              className="start-text"
              style={{
                left: '19%',
                top: '-4%',
                fontWeight: '900',
                fontSize: '36px',
                lineHeight: '42px',
                color: 'black',
              }}
            >
              PV4EV
            </p>
          )}
        </button>
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

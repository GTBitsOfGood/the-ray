import React from 'react';
import '../static/css/how-it-works.css';
import PropTypes from 'prop-types';
import solarTop from '../static/images/solar-top.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

class HowItWorks extends React.PureComponent {
  render() {
    const { pageIndex } = this.props;
    return (
      <div className="how-body" style={{ backgroundColor: '#2d9f8f' }}>
        <div className="how-box" style={{ zIndex: '12' }}>
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
            <div className="how-container">
              <div className="how-title">How It Works</div>
              <div className="how-text">
                The photovoltaic cells of the solar panels absorb sunlight and generate energy which is stored and ready
                to be used to charge your electric vehicle.
              </div>
            </div>
          </ParallaxComponent>
        </div>
        <img className="how-image" src={solarTop} alt={solarTop} style={{ zIndex: '10' }} />
        <div style={{ width: '100%', top: '0%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '11%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '22%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '33%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '44%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '55%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '66%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '77%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ width: '100%', top: '88%', border: '1px solid white', position: 'absolute' }} />
        {/* <div style={{width: '100%', top: '90%', border: '1px solid white', position: 'absolute'}}/> */}
        <div style={{ width: '100%', top: '100%', border: '1px solid white', position: 'absolute' }} />

        <div style={{ height: '100%', left: '0%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ height: '100%', left: '20%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ height: '100%', left: '40%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ height: '100%', left: '60%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ height: '100%', left: '80%', border: '1px solid white', position: 'absolute' }} />
        <div style={{ height: '100%', left: '100%', border: '1px solid white', position: 'absolute' }} />
      </div>
    );
  }
}

HowItWorks.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default HowItWorks;

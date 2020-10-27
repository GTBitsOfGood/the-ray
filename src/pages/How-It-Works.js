import React from 'react';
import '../static/css/how-it-works.css';
import solarTop from '../static/images/solar-top.png';

class HowItWorks extends React.PureComponent {
  render() {
    return (
      <div className="body" style={{ backgroundColor: '#092342' }}>
        <div className="box" style={{ zIndex: '12' }}>
          <div className="title" style={{ left: '4%', top: '6%' }}>
            How It Works
          </div>
          <div className="text" style={{ left: '4%', top: '32%', zIndex: '11', width: '600px' }}>
            The photovoltaic cells of the solar panels absorb sunlight and generate energy which is stored and ready to
            be used to charge your electric vehicle.
          </div>
        </div>
        <img className="image" src={solarTop} alt={solarTop} style={{ zIndex: '10' }} />
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

export default HowItWorks;

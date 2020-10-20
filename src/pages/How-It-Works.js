import React from 'react';
import '../static/css/how-it-works.css';
import solarTop from '../static/images/solar-top.png';

class HowItWorks extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <div className="box">
          <p className="title">How It Works</p>
          <p className="text">
            The photovoltaic cells of the solar panels absorb sunlight and generate energy which is stored and ready to
            be used to charge your electric vehicle.
          </p>
        </div>
        <img className="image" src={solarTop} alt={solarTop} />
      </div>
    );
  }
}

export default HowItWorks;

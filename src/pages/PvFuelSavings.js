import React from 'react';
import '../static/css/PvFuelSavings.css';
import highway from '../static/images/fuel-highway.png';

const PvFuelSavings = () => {
  return (
    <div>
      <div className="pv-fuel-container">
        <div className="pv-fuel-background">
          <div className="pv-fuel-squish-text">
            <p className="pv-fuel-text">Owning an electric vehicle will save the typical driver</p>
            <p className="pv-fuel-text-large">$6,000 to $10,000</p>
            <p className="pv-fuel-text">
              Over the life of the vehicle, compared to owning a comparable gas-powered vehicle*
            </p>
            <p className="pv-fuel-citation">
              * Preston, B. (2020, October 8). EVs Offer Big Savings Over Traditional Gas-Powered Cars.
            </p>
          </div>
        </div>
        <img className="pv-fuel-highway" src={highway} alt="highway" />
      </div>
    </div>
  );
};

export default PvFuelSavings;

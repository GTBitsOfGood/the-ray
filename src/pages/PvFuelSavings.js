import React from 'react';
import '../static/css/PvFuelSavings.css';
import PropTypes from 'prop-types';
import highway from '../static/images/fuel-highway.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PvFuelSavings = (props) => {
  const { pageIndex } = props;
  return (
    <div>
      <div className="pv-fuel-container">
        <img className="pv-fuel-highway" src={highway} alt="highway" />
        <div className="pv-fuel-background">
          <ParallaxComponent pageIndex={pageIndex} transitionDelay={0} transitionTime={1500}>
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
          </ParallaxComponent>
        </div>
      </div>
    </div>
  );
};

PvFuelSavings.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PvFuelSavings;

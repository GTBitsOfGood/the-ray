import React from 'react';
import '../static/css/overview.css';
import Car from '../static/images/full-car.png';
import Graphic from '../static/images/car-graphic.svg';

const Overview = () => {
  return (
    <div className="overview-body">
      <div className="overview-left">
        <img src={Graphic} alt="Car Graphic" />
      </div>
      <div className="overview-right">
        <img src={Car} alt="The Ray Car" />
      </div>
      <div className="overview-text" />
    </div>
  );
};

export default Overview;

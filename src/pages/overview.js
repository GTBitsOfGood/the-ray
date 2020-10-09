import React from 'react';
import '../static/css/overview.css';
import Car from '../static/images/full-car.png';
import Graphic from '../static/images/car-graphic.svg';
import Left from '../static/images/left-background.svg';
import Right from '../static/images/right-background.svg';

const Overview = () => {
  return (
    <div className="overview-body">
      <div className="overview-left">
        <img className="overview-left-image" src={Graphic} alt="Car Graphic" />
        <img className="overview-left-background" src={Left} alt="Left background" />
        <p className="overview-left-text">Tire inflation and monitoring methods are a hassle.</p>
      </div>
      <div className="overview-right">
        <img className="overview-right-image" src={Car} alt="The Ray Car" />
        <img className="overview-right-background" src={Right} alt="Right background" />
        <p className="overview-right-text">
          WheelRight strives to make this process easier to save time, fuel, money, and most importantly--lives.
        </p>
      </div>
      <div className="overview-text" />
    </div>
  );
};

export default Overview;

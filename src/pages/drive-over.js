import React from 'react';
import '../static/css/drive-over.css';
import Car from '../static/images/half-car.png';
import Tire from '../static/images/tire-graphic.svg';
// import Line from '../static/images/white-line.svg';
import Yellow from '../static/images/yellow-dot.svg';

const DriveOver = () => {
  return (
    <div className="drive-background">
      <img className="image-tire" src={Tire} alt="Tire Graphic" />
      <img className="image-car" src={Car} alt="Car" />
      <p className="drive-title">Drive Over</p>
      <p className="drive-text">
        Drivers simply roll over the monitor to receive critical information about their tires.
      </p>
      {/* <img className="image-line" src={Line} alt="Line" /> */}
      <hr className="hr" />
      <img className="image-dot" src={Yellow} alt="Yellow Dot" />
    </div>
  );
};

export default DriveOver;

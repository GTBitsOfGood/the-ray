import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/drive-over.css';
import Car from '../static/images/half-car.png';
import Tire from '../static/images/tire-graphic.svg';
import Line from '../static/images/white-line.svg';
import Yellow from '../static/images/yellow-dot.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const DriveOver = (props) => {
  const { isActive } = props;
  return (
    <div className="drive-background">
      <img className="image-car" src={Car} alt="Car" />
      <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
        <img className="image-tire" src={Tire} alt="Tire Graphic" />
        <p className="drive-title">Drive Over</p>
        <p className="drive-text">
          Drivers simply roll over the monitor to receive critical information about their tires.
        </p>
        <img className="image-line" src={Line} alt="Line" />
        <img className="image-dot" src={Yellow} alt="Yellow Dot" />
      </ParallaxComponent>
    </div>
  );
};

DriveOver.propTypes = {
  isActive: PropTypes.bool,
};

DriveOver.defaultProps = {
  isActive: false,
};

export default DriveOver;

import React from 'react';
import '../static/css/drive-over.css';
import PropTypes from 'prop-types';
import Car from '../static/images/half-car.png';
import Tire from '../static/images/tire-graphic.svg';
import Yellow from '../static/images/yellow-dot.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const DriveOver = (props) => {
  const { pageIndex } = props;
  return (
    <div className="drive-background">
      <img className="image-car" src={Car} alt="Car" />
      <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
        <img className="image-tire" src={Tire} alt="Tire Graphic" />
        <p className="drive-title">Drive Over</p>
        <p className="drive-text">
          Drivers simply roll over the monitor to receive critical information about their tires.
        </p>
        <hr className="hr" />
        <img className="image-dot" src={Yellow} alt="Yellow Dot" />
      </ParallaxComponent>
    </div>
  );
};

DriveOver.propTypes = {
  pageIndex: PropTypes.number,
};

DriveOver.defaultProps = {
  pageIndex: -2,
};

export default DriveOver;

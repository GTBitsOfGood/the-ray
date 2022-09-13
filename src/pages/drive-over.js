import React from 'react';
import '../static/css/drive-over.css';
import '../static/css/commons.css';
import PropTypes from 'prop-types';
import Car from '../static/images/half-car.png';
import CarMobile from '../static/images/half-car-mobile.png';
import Tire from '../static/images/tire-graphic.svg';
import Yellow from '../static/images/yellow-dot.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import useMediaQuery from '../hooks/useMediaQuery';

const DriveOver = (props) => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  const { pageIndex } = props;
  return (
    <div className="drive-background">
      {/* <div> */}
      <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
        <div className="flex-col driveover-container">
          <img className="image-tire" src={Tire} alt="Tire Graphic" />
          <p className="drive-title">Drive Over</p>
          <p className="drive-text">
            Drivers simply roll over the monitor to receive critical information about their tires.
          </p>
          <div className="flex drive-pointer">
            <hr className="hr" />
            <img className="image-dot" src={Yellow} alt="Yellow Dot" />
          </div>
        </div>
      </ParallaxComponent>
      {/* </div> */}
      <img className="image-car" src={isMobile ? CarMobile : Car} alt="Car" />
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

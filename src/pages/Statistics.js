import React from 'react';
import '../static/css/Stats.css';
import PropTypes from 'prop-types';
import Crash from '../static/images/car-crash-crop.jpg';
import FlatTire from '../static/images/flat-tire-crop.jpg';
import GasStation from '../static/images/gas-station-crop.jpg';
import GasStationMobile from '../static/images/gas-station-crop-mobile.png';
import carAccidentIcon from '../static/images/car-accident-icon.svg';
import carAccidentIconBlack from '../static/images/car-accident-icon-black.svg';
import gasIcon from '../static/images/gas-icon.svg';
import gasIconBlack from '../static/images/gas-icon-black.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import useMediaQuery from '../hooks/useMediaQuery';

const getBackgroundImg = (isMobile, image) => {
  if (image === 'Crash') {
    return Crash;
  }
  if (image === 'FlatTire') {
    return FlatTire;
  }
  return isMobile ? GasStationMobile : GasStation;
};

const Statistics = ({ image, selection, number, text, pageIndex, source }) => {
  const isMobile = useMediaQuery('(max-width: 800px)');
  const currImage = getBackgroundImg(isMobile, image);

  return (
    <div className="stats-body">
      <div className="stats-image-container">
        <img className="stats-image" src={currImage} alt={currImage} />
        <ParallaxComponent pageIndex={pageIndex} transitionTime={2000} transitionDelay={0}>
          <div className="stats-main-text">{number}</div>
        </ParallaxComponent>
      </div>
      <div className="stats-lower-container">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={2000} transitionDelay={0} styles={{ flexGrow: 1 }}>
          <div className="stats-lower-elements">
            <p className="stats-secondary-text">
              <center>{text}</center>
            </p>
            <hr />
            <div className="stats-icons">
              <div className="stats-icon">
                {selection === '0' && (
                  <div className="stats-border-container">
                    <img
                      src={gasIconBlack}
                      alt="gasIconBlack"
                      style={{ width: 'calc(10px + 3vw)', height: 'calc(10px + 6vw)' }}
                    />
                  </div>
                )}
                {selection !== '0' && (
                  <div className="stats-no-border-container">
                    <img
                      src={gasIcon}
                      alt="gasIcon"
                      style={{ width: 'calc(10px + 4vw)', height: 'calc(10px + 8vw)' }}
                    />
                  </div>
                )}
                <p className="stats-tertiary-text">gas</p>
              </div>
              <div className="stats-icon">
                <div>
                  {selection !== '0' && (
                    <div className="stats-border-container">
                      <img
                        src={carAccidentIconBlack}
                        alt="carAccidentIconBlack"
                        style={{ width: 'calc(20px + 6vw)', height: 'calc(20px + 5vw)' }}
                      />
                    </div>
                  )}
                  {selection === '0' && (
                    <div className="stats-no-border-container">
                      <img
                        src={carAccidentIcon}
                        alt="carAccidentIcon"
                        style={{ width: 'calc(20px + 6vw)', height: 'calc(20px + 5vw)' }}
                      />
                    </div>
                  )}
                </div>
                <p className="stats-tertiary-text">car accidents</p>
              </div>
            </div>
          </div>
          <p className="source">{source}</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  image: PropTypes.node,
  selection: PropTypes.string,
  number: PropTypes.string,
  text: PropTypes.string,
  pageIndex: PropTypes.number,
  source: PropTypes.string,
};

Statistics.defaultProps = {
  image: GasStation,
  selection: '0',
  number: '2,000,000,000',
  text: 'gallons of gas wasted because of poor tire management',
  pageIndex: -2,
  source: '',
};
export default Statistics;

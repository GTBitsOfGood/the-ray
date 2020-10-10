import React from 'react';
import '../static/css/Stats.css';
import PropTypes from 'prop-types';
import Crash from '../static/images/car-crash-crop.jpg';
import FlatTire from '../static/images/flat-tire-crop.jpg';
import GasStation from '../static/images/gas-station-crop.jpg';
import carAccidentIcon from '../static/images/car-accident-icon.svg';
import carAccidentIconBlack from '../static/images/car-accident-icon-black.svg';
import gasIcon from '../static/images/gas-icon.svg';
import gasIconBlack from '../static/images/gas-icon-black.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

class Statistics extends React.PureComponent {
  render() {
    const { isActive, image, selection, number, text } = this.props;

    let currImage = GasStation;

    if (image === 'Crash') {
      currImage = Crash;
    } else if (image === 'FlatTire') {
      currImage = FlatTire;
    }
    return (
      <div className="body">
        <div className="image-container">
          <img className="image" src={currImage} alt={currImage} />
          <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
            <div className="main-text">{number}</div>
          </ParallaxComponent>
        </div>
        <div className="lower-container">
          <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
            <div className="lower-elements">
              <p className="secondary-text">{text}</p>
              <hr />
              <div className="icons">
                <div className="icon">
                  {selection === '0' && (
                    <div className="border-container">
                      <img
                        src={gasIconBlack}
                        alt="gasIconBlack"
                        style={{ width: 'calc(10px + 3vw)', height: 'calc(10px + 6vw)' }}
                      />
                    </div>
                  )}
                  {selection !== '0' && (
                    <div className="no-border-container">
                      <img
                        src={gasIcon}
                        alt="gasIcon"
                        style={{ width: 'calc(10px + 4vw)', height: 'calc(10px + 8vw)' }}
                      />
                    </div>
                  )}
                  <p className="tertiary-text">gas</p>
                </div>
                <div className="icon">
                  <div>
                    {selection !== '0' && (
                      <div className="border-container">
                        <img
                          src={carAccidentIconBlack}
                          alt="carAccidentIconBlack"
                          style={{ width: 'calc(20px + 6vw)', height: 'calc(20px + 5vw)' }}
                        />
                      </div>
                    )}
                    {selection === '0' && (
                      <div className="no-border-container">
                        <img
                          src={carAccidentIcon}
                          alt="carAccidentIcon"
                          style={{ width: 'calc(20px + 6vw)', height: 'calc(20px + 5vw)' }}
                        />
                      </div>
                    )}
                  </div>
                  <p className="tertiary-text">car accidents</p>
                </div>
              </div>
            </div>
          </ParallaxComponent>
        </div>
      </div>
    );
  }
}

Statistics.propTypes = {
  isActive: PropTypes.bool,
  image: PropTypes.node,
  selection: PropTypes.string,
  number: PropTypes.string,
  text: PropTypes.string,
};

Statistics.defaultProps = {
  isActive: false,
  image: GasStation,
  selection: '0',
  number: '2,000,000,000',
  text: 'gallons of gas wasted because of poor tire management',
};
export default Statistics;

import React from 'react';
import '../static/css/Stats.css';
import PropTypes from 'prop-types';
import Crash from '../static/images/car-crash-crop.jpg';
import FlatTire from '../static/images/flat-tire-crop.jpg';
import GasStation from '../static/images/gas-station-crop.png';
import carAccidentIcon from '../static/images/car-accident-icon.svg';
import carAccidentIconBlack from '../static/images/car-accident-icon-black.svg';
import gasIcon from '../static/images/gas-icon.svg';
import gasIconBlack from '../static/images/gas-icon-black.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

class Statistics extends React.PureComponent {
  render() {
    const { image, selection, number, text, pageIndex, source } = this.props;

    let currImage = GasStation;

    if (image === 'Crash') {
      currImage = Crash;
    } else if (image === 'FlatTire') {
      currImage = FlatTire;
    }
    return (
      <div className="stats-body">
        <div className="stats-image-container">
          <img className="stats-image" src={currImage} alt={currImage} />
        </div>
        <div className="stats-middle">
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
            <div className="stats-main-text stats-text">{number}</div>
            <div className="stats-secondary-text stats-text">
              <center>{text}</center>
            </div>
          </ParallaxComponent>
        </div>
        <div className="stats-lower-container">
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ flexGrow: 1 }}>
            <div className="stats-lower-elements">
              <hr className="stats-only-desktop" style={{ marginTop: '10px', marginBottom: '30px' }} />
              <div className="stats-icons">
                <div className="stats-icon">
                  {selection === '0' && (
                    <div className="stats-container stats-border-container">
                      <img src={gasIconBlack} alt="gasIconBlack" style={{ width: 'max(50px,4.5vw)' }} />
                    </div>
                  )}
                  {selection !== '0' && (
                    <div className="stats-container stats-outline-container">
                      <img src={gasIcon} alt="gasIcon" style={{ width: 'max(50px,4.5vw)' }} />
                    </div>
                  )}
                  <p className="stats-tertiary-text stats-text">fuel</p>
                </div>
                <div className="stats-icon">
                  <div>
                    {selection !== '0' && (
                      <div className="stats-container stats-border-container">
                        <img
                          src={carAccidentIconBlack}
                          alt="carAccidentIconBlack"
                          style={{ width: 'max(94px, 7.25vw)' }}
                        />
                      </div>
                    )}
                    {selection === '0' && (
                      <div className="stats-container stats-outline-container">
                        <img src={carAccidentIcon} alt="carAccidentIcon" style={{ width: 'max(94px, 7.25vw)' }} />
                      </div>
                    )}
                  </div>
                  <p className="stats-tertiary-text stats-text">car crashes</p>
                </div>
              </div>
            </div>
            <p className="source stats-text">{source}</p>
          </ParallaxComponent>
        </div>
      </div>
    );
  }
}

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

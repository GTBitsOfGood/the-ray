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
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
            <div className="stats-main-text">{number}</div>
            <div className="stats-secondary-text">
              <p>
                <center>{text}</center>
              </p>
            </div>
          </ParallaxComponent>
        </div>
        <div className="stats-lower-container">
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ flexGrow: 1 }}>
            <div className="stats-lower-elements">
              <hr />
              <div className="stats-icons">
                <div className="stats-icon">
                  {selection === '0' && (
                    <div className="stats-border-container">
                      <img src={gasIconBlack} alt="gasIconBlack" className="gasIcon" />
                    </div>
                  )}
                  {selection !== '0' && (
                    <div className="stats-no-border-container">
                      <img src={gasIcon} alt="gasIcon" className="gasIcon" />
                    </div>
                  )}
                  <p className="stats-tertiary-text">gas</p>
                </div>
                <div className="stats-icon">
                  <div>
                    {selection !== '0' && (
                      <div className="stats-border-container">
                        <img src={carAccidentIconBlack} alt="carAccidentIconBlack" className="gasIcon" />
                      </div>
                    )}
                    {selection === '0' && (
                      <div className="stats-no-border-container">
                        <img src={carAccidentIcon} alt="carAccidentIcon" className="gasIcon" />
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

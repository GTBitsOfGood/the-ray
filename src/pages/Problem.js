import React from 'react';
import '../static/css/problem.css';
import PropTypes from 'prop-types';
import lowBattery from '../static/images/Low-battery-icon.svg';
import fullBattery from '../static/images/Full-battery-icon.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

class Problem extends React.PureComponent {
  render() {
    const { selection, pageIndex } = this.props;
    return (
      <div className="problem-body">
        {selection === 'Problem' && (
          <div>
            <img className="problem-icon" src={lowBattery} alt={lowBattery} />
            <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
              <div className="problem-container">
                <p className="problem-title">{selection}</p>
                <p className="problem-text">
                  Electric vehicles continue to gain market share, but outside metro Atlanta, the infrastructure for
                  charging electric vehicles is lacking.
                </p>
              </div>
            </ParallaxComponent>
          </div>
        )}
        {selection !== 'Problem' && (
          <div>
            <img className="problem-icon" src={fullBattery} alt={fullBattery} />
            <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
              <div className="problem-container">
                <p className="problem-title">{selection}</p>
                <p className="problem-text">
                  I-85 is a major travel corridor that runs from Alabama to Virginia, connecting major metro areas
                  throughout the Southeast, offering a prime opportunity to reduce carbon emissions by providing
                  accessible solar-powered charging stations.
                </p>
              </div>
            </ParallaxComponent>
          </div>
        )}
      </div>
    );
  }
}

Problem.propTypes = {
  selection: PropTypes.string,
  pageIndex: PropTypes.number,
};

Problem.defaultProps = {
  selection: 'Problem',
  pageIndex: -2,
};

export default Problem;

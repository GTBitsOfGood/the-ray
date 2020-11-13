import React from 'react';
import '../static/css/problem.css';
import PropTypes from 'prop-types';
import lowBattery from '../static/images/Low-battery-icon.svg';
import fullBattery from '../static/images/Full-battery-icon.svg';

class Problem extends React.PureComponent {
  render() {
    const { selection } = this.props;
    return (
      <div className="problem-body">
        <p className="problem-title">{selection}</p>

        {selection === 'Problem' && (
          <div>
            <img className="problem-icon" src={lowBattery} alt={lowBattery} />
            <p className="problem-text">
              Electric vehicles continue to gain market share, but outside metro Atlanta, the infrastructure for
              charging electric vehicles is lacking.
            </p>
          </div>
        )}
        {selection !== 'Problem' && (
          <div>
            <img className="problem-icon" src={fullBattery} alt={fullBattery} />
            <p className="problem-text">
              I-85 is a major travel corridor that runs from Alabama to Virginia, connecting major metro areas
              throughout the Southeast, offering a prime opportunity to reduce carbon emissions by providing accessible
              solar-powered charging stations.
            </p>
          </div>
        )}
      </div>
    );
  }
}

Problem.propTypes = {
  selection: PropTypes.string,
};

Problem.defaultProps = {
  selection: 'Problem',
};

export default Problem;

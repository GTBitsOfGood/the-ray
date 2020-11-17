import React from 'react';
import PropTypes from 'prop-types';

import '../static/css/EnergyVisPage.css';
import EnergyBarGraph from '../components/EnergyBarGraph/EnergyBarGraph';

const EnergyVisPage = ({ setkwh }) => {
  return (
    <div className="vis-body">
      <EnergyBarGraph setkwh={setkwh} />
    </div>
  );
};

EnergyVisPage.propTypes = {
  setkwh: PropTypes.func.isRequired,
};

export default EnergyVisPage;

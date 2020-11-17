import React from 'react';
import PropTypes from 'prop-types';

import '../static/css/CO2VisPage.css';
import CO2BarGraph from '../components/CO2BarGraph/CO2BarGraph';

const CO2VisPage = ({ setCO2 }) => {
  return (
    <div className="vis-body">
      <CO2BarGraph setCO2={setCO2} />
    </div>
  );
};

CO2VisPage.propTypes = {
  setCO2: PropTypes.func.isRequired,
};

export default CO2VisPage;

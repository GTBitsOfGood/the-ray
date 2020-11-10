import React from 'react';

import '../static/css/EnergyVisPage.css';
import EnergyBarGraph from '../components/EnergyBarGraph/EnergyBarGraph';

const EnergyVisPage = () => {
  return (
    <div className="vis-body">
      <EnergyBarGraph />
    </div>
  );
};

export default EnergyVisPage;

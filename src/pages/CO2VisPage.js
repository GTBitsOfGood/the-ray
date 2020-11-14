import React from 'react';

import '../static/css/CO2VisPage.css';
import CO2BarGraph from '../components/CO2BarGraph/CO2BarGraph';

const CO2VisPage = () => {
  return (
    <div className="vis-body">
      <CO2BarGraph />
    </div>
  );
};

export default CO2VisPage;

import React from 'react';
import '../static/css/PvStat.css';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';

function PvSolarStat() {
  return (
    <div className="pv-solar-stat-background pv-stat-background">
      <div className="pv-gradient-blue-background">
        <div style={{ padding: '225px 0' }}>
          <PvNumBox
            toptext="Solar panels installed in interstate interchanges in the US could generate up to"
            bigtext="36 TWh/year"
          />
        </div>
      </div>
    </div>
  );
}

export default PvSolarStat;

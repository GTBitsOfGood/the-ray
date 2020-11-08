import React from 'react';
import '../static/css/PvStat.css';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';

function PvEVStat() {
  return (
    <div className="pv-ev-stat-background pv-stat-background">
      <div className="pv-gradient-blue-background">
        <div style={{ padding: '175px 0' }}>
          <PvNumBox toptext="enough to power" bigtext="12 million" bottomtext="passenger EVs annually" />
        </div>
      </div>
    </div>
  );
}

export default PvEVStat;

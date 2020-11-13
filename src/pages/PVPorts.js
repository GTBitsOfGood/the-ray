import React from 'react';
import '../static/css/PvStat.css';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';

function PVPorts() {
  return (
    <div className="pv-ev-ports-background pv-stat-background">
      <div className="pv-gradient-yellow-background">
        <div style={{ padding: '175px 0' }}>
          <PvNumBox
            subcolor="#000000"
            toptext="This amount of electric vehicle uptake will require"
            bigtext="9.6 million"
            bottomtext="charging ports"
          />
        </div>
      </div>
    </div>
  );
}

export default PVPorts;

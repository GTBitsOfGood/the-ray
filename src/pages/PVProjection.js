import React from 'react';
import '../static/css/PvStat.css';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';

function PVProjection() {
  return (
    <div className="pv-ev-projection-background pv-stat-background">
      <div className="pv-gradient-yellow-background">
        <div style={{ padding: '175px 0' }}>
          <PvNumBox
            subcolor="#000000"
            toptext="Projection show that by 2030 there will be over"
            bigtext="18.7 million"
            bottomtext="electric vehicles on the road"
          />
        </div>
      </div>
    </div>
  );
}

export default PVProjection;

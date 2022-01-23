import React from 'react';
import '../static/css/PvStat.css';
import PropTypes from 'prop-types';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PVPorts = (props) => {
  const { pageIndex } = props;
  return (
    <div className="pv-ev-ports-background pv-stat-background">
      <div className="pv-gradient-yellow-background">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <PvNumBox
            subcolor="#000000"
            toptext="This amount of electric vehicle uptake will require"
            bigtext="9.6 million"
            bottomtext="charging ports"
          />
        </ParallaxComponent>
      </div>
    </div>
  );
};

PVPorts.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PVPorts;

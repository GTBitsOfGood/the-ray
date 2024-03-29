import React from 'react';
import '../static/css/PvStat.css';
import PropTypes from 'prop-types';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PvEVStat = (props) => {
  const { pageIndex } = props;
  return (
    <div className="pv-ev-stat-background pv-stat-background">
      <div className="pv-gradient-blue-background">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <PvNumBox toptext="enough to power" bigtext="12 million" bottomtext="passenger EVs annually" />
        </ParallaxComponent>
      </div>
    </div>
  );
};

PvEVStat.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PvEVStat;

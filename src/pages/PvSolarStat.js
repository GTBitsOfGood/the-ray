import React from 'react';
import '../static/css/PvStat.css';
import PropTypes from 'prop-types';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PvSolarStat = (props) => {
  const { pageIndex } = props;
  return (
    <div className="pv-solar-stat-background pv-stat-background">
      <div className="pv-gradient-blue-background">
        <div style={{ padding: '225px 0' }}>
          <ParallaxComponent pageIndex={pageIndex} transitionDelay={0} transitionTime={1500}>
            <PvNumBox
              toptext="Solar panels installed in interstate interchanges in the US could generate up to"
              bigtext="36 TWh/year"
            />
          </ParallaxComponent>
        </div>
      </div>
    </div>
  );
};

PvSolarStat.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PvSolarStat;

import React from 'react';
import '../static/css/PvStat.css';
import PropTypes from 'prop-types';
import PvNumBox from '../components/Pages/PvStats/PvNumBox';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const PVProjection = (props) => {
  const { pageIndex } = props;
  return (
    <div className="pv-ev-projection-background pv-stat-background">
      <div className="pv-gradient-yellow-background">
        <ParallaxComponent pageIndex={pageIndex} transitionDelay={0} transitionTime={1500} styles={{ height: '100%' }}>
          <PvNumBox
            background-size="cover"
            subcolor="#000000"
            toptext="Projection show that by 2030 there will be over"
            bigtext="18.7 million"
            bottomtext="electric vehicles on the road"
          />
        </ParallaxComponent>
      </div>
    </div>
  );
};

PVProjection.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default PVProjection;

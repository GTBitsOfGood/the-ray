import React from 'react';
import '../static/css/findUs.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Find = (props) => {
  const { pageIndex } = props;
  return (
    <div className="find-background">
      <div className="find-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <p className="find-main-text">Here&apos;s where you can find us!</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Find.propTypes = {
  pageIndex: PropTypes.number,
};

Find.defaultProps = {
  pageIndex: -2,
};

export default Find;

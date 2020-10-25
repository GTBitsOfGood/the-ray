import React from 'react';
import '../static/css/Help.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Help = (props) => {
  const { pageIndex } = props;
  return (
    <div className="help-background">
      <div className="find-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <p className="help-main-text">How you can help</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Help.propTypes = {
  pageIndex: PropTypes.number,
};

Help.defaultProps = {
  pageIndex: -2,
};

export default Help;

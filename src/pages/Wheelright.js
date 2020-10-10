import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/wheelright.css';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Wheelright = (props) => {
  const { isActive } = props;
  return (
    <div className="wheelright-background">
      <div className="wheelright-body">
        <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500} transitionDelay={0}>
          <p className="wheelright-text">WHEEL RIGHT</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Wheelright.propTypes = {
  isActive: PropTypes.bool,
};

Wheelright.defaultProps = {
  isActive: false,
};

export default Wheelright;

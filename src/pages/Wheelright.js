import React from 'react';
import '../static/css/wheelright.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Wheelright = (props) => {
  const { pageIndex } = props;
  return (
    <div className="wheelright-background">
      <div className="wheelright-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <p className="wheelright-text">WHEEL RIGHT</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Wheelright.propTypes = {
  pageIndex: PropTypes.number,
};

Wheelright.defaultProps = {
  pageIndex: -2,
};

export default Wheelright;

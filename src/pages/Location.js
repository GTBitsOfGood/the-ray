import React from 'react';
import '../static/css/Location.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Location = (props) => {
  const { pageIndex } = props;
  return (
    <div className="location-background">
      <div className="split left">
        <div className="location-body">
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
            <div className="parallax-content">
              <p className="help-location-text">
                The Ray Welcome Center <br />
              </p>
              <p className="help-location-text2">
                The Ray is a proving ground for the evolving ideas and technologies that will transform the
                transportation infrastructure of the future, and it starts on 18 miles of West Georgia&apos;s I-85, and
                the land and communities surrounding it.
              </p>
            </div>
          </ParallaxComponent>
        </div>
      </div>

      <div className="right">{/* <div className="location-body2" /> */}</div>
    </div>
  );
};

Location.propTypes = {
  pageIndex: PropTypes.number,
};

Location.defaultProps = {
  pageIndex: -2,
};

export default Location;

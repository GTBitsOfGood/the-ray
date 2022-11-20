import React from 'react';
import '../static/css/Location.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import useMediaQuery from '../hooks/useMediaQuery';

const Location = (props) => {
  const { pageIndex } = props;
  const isPageMobile = useMediaQuery('(max-width: 850px)');

  const locationPage = () => {
    if (isPageMobile) {
      return (
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100vh' }}>
          <div className="location-background-mobile">
            <div className="split-mobile top">
              <div className="location-body-mobile">
                <p className="help-location-text-mobile">
                  The Ray Welcome Center <br />
                </p>
                <p className="help-location-text2-mobile">
                  The Ray is a proving ground for the evolving ideas and technologies that will transform the
                  transportation infrastructure of the future, and it starts on 18 miles of West Georgia&apos;s I-85,
                  and the land and communities surrounding it.
                </p>
              </div>
            </div>

            <div className="split-mobile bottom">
              <div className="location-body2-mobile" />
            </div>
          </div>
        </ParallaxComponent>
      );
    }
    return (
      <div className="location-background">
        <div className="split left">
          <div className="location-body">
            <ParallaxComponent
              pageIndex={pageIndex}
              transitionTime={1500}
              transitionDelay={0}
              styles={{ height: '100vh' }}
            >
              <p className="help-location-text">
                The Ray Welcome Center <br />
              </p>
              <p className="help-location-text2">
                The Ray is a proving ground for the evolving ideas and technologies that will transform the
                transportation infrastructure of the future, and it starts on 18 miles of West Georgia&apos;s I-85, and
                the land and communities surrounding it.
              </p>
            </ParallaxComponent>
          </div>
        </div>

        <div className="split right">
          <div className="location-body2" />
        </div>
      </div>
    );
  };

  return locationPage();
};

Location.propTypes = {
  pageIndex: PropTypes.number,
};

Location.defaultProps = {
  pageIndex: -2,
};

export default Location;

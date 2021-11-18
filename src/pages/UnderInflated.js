import React from 'react';
import '../static/css/UnderInflated.css';
import '../static/css/commons.css';
import PropTypes from 'prop-types';
import Hydroplaning from '../static/images/hydroplaning.svg';
import Skidding from '../static/images/tire-skid.svg';
import FlatTire from '../static/images/flat-tire-icon.svg';
import BlowOut from '../static/images/blown-out.svg';
import Right from '../static/images/tire-right.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const UnderInflated = (props) => {
  const { pageIndex } = props;
  return (
    <div className="underinflated-body">
      <div className="underinflated-left-image">
        <div className="left-underinflated-color">
          <ParallaxComponent
            pageIndex={pageIndex}
            transitionTime={1500}
            transitionDelay={0}
            styles={{ height: '100%' }}
          >
            <div className="flex-col underinflated-left">
              <p>The International Tire and Rubber Association cites</p>
              <p className="underinflated-text">under-inflated tires</p>
              <p>as the single most common factor in tire failure. </p>
            </div>
          </ParallaxComponent>
        </div>
      </div>
      <div className="underinflated-right">
        <img className="underinflated-right-background" src={Right} alt="Right background" />
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <div className="flex flex-col underinflated-icon-container">
            <p className="dangers-text"> Potential dangers include: </p>
            <div className="flex underinflated-icon-row">
              <img className="skidding-image" src={Skidding} alt="Hydroplaning" />
              <p className="skidding-text"> skidding </p>
            </div>
            <div className="flex underinflated-icon-row">
              <img className="hydroplaning-image" src={Hydroplaning} alt="Hydroplaning" />
              <p className="hydroplaning-text"> hydroplaning </p>
            </div>
            <div className="flex underinflated-icon-row">
              <img className="flattire-image" src={FlatTire} alt="Hydroplaning" />
              <p className="flat-tire-underinflated-text"> flat tires </p>
            </div>
            <div className="flex underinflated-icon-row">
              <img className="blowout-image" src={BlowOut} alt="Hydroplaning" />
              <p className="tire-blowout-text"> tire blowouts </p>
            </div>
          </div>
        </ParallaxComponent>
      </div>
    </div>
  );
};

UnderInflated.propTypes = {
  pageIndex: PropTypes.number,
};

UnderInflated.defaultProps = {
  pageIndex: -2,
};

export default UnderInflated;

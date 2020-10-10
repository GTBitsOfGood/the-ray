import React from 'react';
import '../static/css/UnderInflated.css';
import Hydroplaning from '../static/images/hydroplaning.svg';
import Skidding from '../static/images/tire-skid.svg';
import FlatTire from '../static/images/flat-tire-icon.svg';
import BlowOut from '../static/images/blown-out.svg';
import Right from '../static/images/tire-right.svg';

const UnderInflated = () => {
  return (
    <div className="overview-body">
      <div className="overview-left-image">
        <div className="left-color">
          <p className="itra-text">
            The International Tire and <br /> Rubber Association cites{' '}
          </p>
          <p className="underinflated-text">
            {' '}
            under-inflated <br /> tires{' '}
          </p>
          <p className="failure-text">
            {' '}
            as the single most common <br /> factor in tire failure.{' '}
          </p>
        </div>
      </div>
      <div className="overview-right">
        <img className="overview-right-background" src={Right} alt="Right background" />
        <p className="dangers-text"> Potential dangers include: </p>
        <p className="skidding-text"> skidding </p>
        <p className="hydroplaning-text"> hydroplaning </p>
        <p className="flat-tire-text"> flat tires </p>
        <p className="tire-blowout-text"> tire blowouts </p>
        <img className="skidding-image" src={Skidding} alt="Hydroplaning" />
        <img className="hydroplaning-image" src={Hydroplaning} alt="Hydroplaning" />
        <img className="flattire-image" src={FlatTire} alt="Hydroplaning" />
        <img className="blowout-image" src={BlowOut} alt="Hydroplaning" />
      </div>
    </div>
  );
};

export default UnderInflated;

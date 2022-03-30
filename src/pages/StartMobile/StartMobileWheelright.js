import React from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Start.css';
import '../../static/css/responsive.css';
import '../../static/css/commons.css';
import '../../static/css/StartMobile.css';
import wheelrightPage1 from '../../static/images/wheelright-page1.jpg';

const StartMobileWheelright = ({ setWheelright }) => {
  return (
    <div className="start-body-mobile">
      <img className="start-wheelright-background" src={wheelrightPage1} alt="frontpage" />
      <div className="start-wheelright-title-sheet" />
      <div className="start-wheelright-title-body">
        <p className="start-wheelright-title-border-text header-lg">WheelRight</p>
        <p className="start-wheelright-tiresafety-title-text ">TIRE SAFETY CHECK STATION</p>
      </div>
      <button type="button" className="transparent-button header-sm" onClick={setWheelright}>
        WHEELRIGHT
      </button>
    </div>
  );
};

StartMobileWheelright.propTypes = {
  setWheelright: PropTypes.func,
};

StartMobileWheelright.defaultProps = {
  setWheelright: () => null,
};

export default StartMobileWheelright;

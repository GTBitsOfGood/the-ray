import React from 'react';
import '../static/css/Partners.css';
import PropTypes from 'prop-types';
import kia from '../static/images/kia-logo-png-transparent 1.png';
import gdot from '../static/images/DOT-GA-US-Logo-2018 1.png';
import facebook from '../static/images/facebook.png';
import twitter from '../static/images/twitter.png';
import linkedin from '../static/images/linked in.png';
import instagram from '../static/images/instagram.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Partners = (props) => {
  const { pageIndex } = props;
  return (
    <div className="partners-background">
      <div className="partners-body">
        <img className="kia" src={kia} alt="Kia logo" />
        <img className="gdot" src={gdot} alt="Dot logo" />
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <a href="https://www.facebook.com/TheRayHighway/">
            <img className="facebook" src={facebook} alt="facebook logo" />
          </a>
          <a href="https://twitter.com/therayhighway?lang=en">
            <img className="twitter" src={twitter} alt="twitter logo" />
          </a>
          <a href="https://www.linkedin.com/company/therayhighway/">
            <img className="linkedin" src={linkedin} alt="linkedin logo" />
          </a>
          <a href="https://www.instagram.com/therayhighway/?hl=en">
            <img className="instagram" src={instagram} alt="instagram logo" />
          </a>
          <p className="partners-toptext">
            POWERED BY <br />
          </p>
          <p className="partners-drive">LET&apos;S DRIVE THE FUTURE</p>
          <p className="return-start">click to return to start</p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Partners.propTypes = {
  pageIndex: PropTypes.number,
};

Partners.defaultProps = {
  pageIndex: -2,
};

export default Partners;

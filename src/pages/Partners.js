import React from 'react';
import '../static/css/Partners.css';
import kia from '../static/images/kia-logo-png-transparent 1.png';
import gdot from '../static/images/DOT-GA-US-Logo-2018 1.png';
import facebook from '../static/images/facebook.png';
import twitter from '../static/images/twitter.png';
import linkedin from '../static/images/linked in.png';
import instagram from '../static/images/instagram.png';

class Partners extends React.PureComponent {
  render() {
    return (
      <div className="partners-background">
        <div className="partners-body">
          <img className="kia" src={kia} alt="Kia logo" />
          <img className="gdot" src={gdot} alt="Dot logo" />
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
        </div>
      </div>
    );
  }
}
export default Partners;

import React from 'react';
import '../static/css/Partners.css';
import kia from '../static/images/kia-logo-png-transparent 1.png';
import gdot from '../static/images/DOT-GA-US-Logo-2018 1.png';
import socials from '../static/images/SOCIALS.png';

class Partners extends React.PureComponent {
  render() {
    return (
      <div className="partners-background">
        <div className="partners-body">
          <img className="kia" src={kia} alt="Kia logo" />
          <img className="gdot" src={gdot} alt="Dot logo" />
          <img className="socials" src={socials} alt="Social Media logos" />
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

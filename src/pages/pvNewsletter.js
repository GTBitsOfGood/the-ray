import React from 'react';
import '../static/css/PvNewsletter.css';
import plug from '../static/images/Plug.png';

class PvNewsletter extends React.PureComponent {
  render() {
    return (
      <div className="background">
        <div className="newsletter-body">
          <img className="plug" src={plug} alt="Plug" />
          <p className="pv-newsletter-main-text">
            The Ray is a movement. <br />
            <br />
            Power the team by making a donation and signing up for our newsletter.
          </p>
          <p className="pv-newsletter-website">
            visit&nbsp;<a href="https://theray.org/"> theray.org</a>
          </p>
        </div>
      </div>
    );
  }
}
export default PvNewsletter;

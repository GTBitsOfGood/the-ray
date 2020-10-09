import React from 'react';
import '../static/css/Newsletter.css';
import cards from '../static/images/creditcards.png';

class Newsletter extends React.PureComponent {
  render() {
    return (
      <div className="background">
        <div className="body">
          <img className="credit-card" src={cards} alt="Credit Cards" />
          <p className="newsletter-main-text">
            The Ray is a movement. <br />
            <br />
            Join the team by making a donation and signing up for our newsletter.
          </p>
          <p className="newsletter-website">visit theray.org</p>
        </div>
      </div>
    );
  }
}
export default Newsletter;

import React from 'react';
import '../static/css/Newsletter.css';
import PropTypes from 'prop-types';
import cards from '../static/images/creditcards.png';
import plug from '../static/images/Plug.png';

class Newsletter extends React.PureComponent {
  render() {
    const { card, message } = this.props;
    return (
      <div className="background">
        <div className={card ? 'news-body' : 'newsletter-body'}>
          {card ? (
            <img className="credit-card" src={cards} alt="Credit Cards" />
          ) : (
            <img className="plug" src={plug} alt="Plug" />
          )}
          <p className="newsletter-main-text">
            The Ray is a movement. <br />
            <br />
            {message}
          </p>
          <p className="newsletter-website">
            visit&nbsp;<a href="https://theray.org/"> theray.org</a>
          </p>
        </div>
      </div>
    );
  }
}

Newsletter.propTypes = {
  card: PropTypes.bool,
  message: PropTypes.string,
};

Newsletter.defaultProps = {
  card: false,
  message: 'Power the team by making a donation and signing up for our newsletter.',
};
export default Newsletter;

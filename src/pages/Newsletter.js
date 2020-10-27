import React from 'react';
import '../static/css/Newsletter.css';
import PropTypes from 'prop-types';
import cards from '../static/images/creditcards.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import plug from '../static/images/Plug.png';

class Newsletter extends React.PureComponent {
  render() {
    const { card, message, pageIndex } = this.props;
    return (
      <div className="background">
        <div className={card ? 'news-body' : 'newsletter-body'}>
          {card ? (
            <img className="credit-card" src={cards} alt="Credit Cards" />
          ) : (
            <img className="plug" src={plug} alt="Plug" />
          )}
          <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
            <p className="newsletter-main-text">
              The Ray is a movement. <br />
              <br />
              {message}
            </p>
            <p className="newsletter-website">
              visit&nbsp;<a href="https://theray.org/"> theray.org</a>
            </p>
          </ParallaxComponent>
        </div>
      </div>
    );
  }
}

Newsletter.propTypes = {
  card: PropTypes.bool,
  message: PropTypes.string,
  pageIndex: PropTypes.number,
};

Newsletter.defaultProps = {
  card: false,
  message: 'Power the team by making a donation and signing up for our newsletter.',
  pageIndex: -2,
};
export default Newsletter;

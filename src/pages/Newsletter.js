import React from 'react';
import '../static/css/Newsletter.css';
import PropTypes from 'prop-types';
import cards from '../static/images/creditcards.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Newsletter = (props) => {
  const { pageIndex } = props;
  return (
    <div className="background">
      <div className="body">
        <img className="credit-card" src={cards} alt="Credit Cards" />
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
          <p className="newsletter-main-text">
            The Ray is a movement. <br />
            <br />
            Join the team by making a donation and signing up for our newsletter.
          </p>
          <p className="newsletter-website">
            visit&nbsp;<a href="https://theray.org/"> theray.org</a>
          </p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  pageIndex: PropTypes.number,
};

Newsletter.defaultProps = {
  pageIndex: -2,
};

export default Newsletter;

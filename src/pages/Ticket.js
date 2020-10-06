import React from 'react';
import '../static/css/Ticket.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import CarComponent from '../components/Pages/Ticket/CarComponent';

function Ticket(props) {
  const { isActive } = props;
  return (
    <div className="ticket-background">
      <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={1500}>
        <div className="split ticket-img-box">
          <div className="ticket-box">
            <div className="ticket-loop" />
            <CarComponent isActive={isActive} />
          </div>
        </div>
        <div className="split ticket-text-box" />
      </ParallaxComponent>
    </div>
  );
}

Ticket.propTypes = {
  isActive: PropTypes.bool,
};

Ticket.defaultProps = {
  isActive: false,
};

export default Ticket;

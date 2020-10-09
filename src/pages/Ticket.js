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
        <div className="split ticket-text-box">
          <hr hidden style={{ marginTop: '20%', visibility: 'hidden' }} />
          <h1 className="ticket-text">Ticket</h1>
          <div className="ticket-text-box" style={{ marginTop: '50px' }}>
            <p className="ticket-text">The tire pressure (in PSI) of each individual tire is displayed.</p>
          </div>
          <h5 className="ticket-text">Average Tire Pressure: </h5>
          <h3 style={{ marginTop: '6px' }} className="ticket-text">
            30-35 PSI
          </h3>
          <p style={{ marginTop: '10px' }} className="ticket-text">
            *Note that these tires are underinflated
          </p>
        </div>
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

import React from 'react';
import '../static/css/Ticket.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import CarComponent from '../components/Pages/Ticket/CarComponent';

function Ticket(props) {
  const { bottomTicket, subtext, dataHeader, data, note, pageIndex } = props;
  return (
    <div className="ticket-background">
      <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0}>
        <div className="split ticket-img-box">
          <div className={`ticket-box ticket-box-${bottomTicket ? 'bottom' : 'top'}`}>
            {!bottomTicket ? <div className="ticket-loop" /> : <div className="ticket-offset" />}
            {bottomTicket ? (
              <CarComponent pageIndex={pageIndex} tireDepthCar heightPct={70} n1={7} n2={10} n3="> 6" n4={9} />
            ) : (
              <CarComponent pageIndex={pageIndex} />
            )}
          </div>
        </div>
        <div className="split ticket-text-box">
          <hr hidden style={{ marginTop: '20%', visibility: 'hidden' }} />
          <h1 className="ticket-text">Ticket</h1>
          <div className="ticket-text-box" style={{ marginTop: '50px' }}>
            <p className="ticket-text">{subtext}</p>
          </div>
          <h5 className="ticket-text">{dataHeader}</h5>
          <h3 style={{ marginTop: '6px' }} className="ticket-text">
            {data}
          </h3>
          <p style={{ marginTop: '10px' }} className="ticket-text">
            {note}
          </p>
        </div>
      </ParallaxComponent>
    </div>
  );
}

Ticket.propTypes = {
  pageIndex: PropTypes.number,
  bottomTicket: PropTypes.bool,
  subtext: PropTypes.string,
  dataHeader: PropTypes.string,
  data: PropTypes.string,
  note: PropTypes.string,
};

Ticket.defaultProps = {
  pageIndex: -2,
  bottomTicket: false,
  subtext: 'The tire pressure (in PSI) of each individual tire is displayed.',
  dataHeader: 'Average tire pressure: ',
  data: '30-35 PSI',
  note: '*Note that these tires are underinflated',
};

export default Ticket;

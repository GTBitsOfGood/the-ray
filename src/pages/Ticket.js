import React from 'react';
import '../static/css/Ticket.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import CarComponent from '../components/Pages/Ticket/CarComponent';
import useMediaQuery from '../hooks/useMediaQuery';
import TicketDiagram from '../static/images/ticketdiagram.png';
import TicketDiagramBottom from '../static/images/ticketdiagrambottom.png';

function Ticket(props) {
  const { bottomTicket, subtext, dataHeader, data, note, pageIndex } = props;

  const mql = useMediaQuery('(max-width: 800px)');

  return (
    <>
      {mql ? (
        <div className="ticket-background-mobile">
          {bottomTicket ? (
            <ParallaxComponent
              pageIndex={pageIndex}
              transitionTime={1500}
              transitionDelay={0}
              styles={{ height: '50%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}
            >
              <div className="ticket-text-box">
                <h1 className="ticket-text">Ticket</h1>
                <div className="ticket-text-box">
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
          ) : (
            <ParallaxComponent
              pageIndex={pageIndex}
              transitionTime={1500}
              transitionDelay={0}
              styles={{ height: '100%' }}
            >
              <div className="text-container">
                <h1>Ticket</h1>
                <p>
                  As you drive through, WheelRight equipment analyzes your tires with cameras and sensors. Within
                  seconds, WheelRight has crunched the data for every individual tire and can deliver the information
                  where and how you need it--a text message, a printed ticket, or organized in the cloud for fleet
                  management.
                </p>
              </div>
            </ParallaxComponent>
          )}

          <ParallaxComponent
            pageIndex={pageIndex}
            transitionTime={1500}
            transitionDelay={0}
            styles={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {bottomTicket ? (
              <img src={TicketDiagramBottom} alt="Ticket Diagram" />
            ) : (
              <img src={TicketDiagram} alt="Ticket Diagram for bottom screen" />
            )}
          </ParallaxComponent>
        </div>
      ) : (
        <div className="ticket-background">
          <div className="car-image-container" style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <div className="split ticket-img-box">
              <div className={`ticket-box ticket-box-${bottomTicket ? 'bottom' : 'top'}`}>
                {!bottomTicket ? <div className="ticket-loop" /> : <div className="ticket-offset" />}
                <div className="car-image" style={{ height: `${bottomTicket ? '83%' : '94%'}` }}>
                  <ParallaxComponent
                    pageIndex={pageIndex}
                    transitionTime={1500}
                    transitionDelay={0}
                    styles={{ height: '100%' }}
                  >
                    {bottomTicket ? (
                      <CarComponent pageIndex={pageIndex} tireDepthCar heightPct={70} n1={7} n2={10} n3="> 6" n4={9} />
                    ) : (
                      <CarComponent pageIndex={pageIndex} />
                    )}
                  </ParallaxComponent>
                </div>
              </div>
            </div>
          </div>
          <ParallaxComponent
            pageIndex={pageIndex}
            transitionTime={1500}
            transitionDelay={0}
            styles={{ height: '100%' }}
          >
            <div className="split ticket-text-box">
              <h1 className="ticket-text">Ticket</h1>
              <div className="ticket-text-box">
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
      )}
    </>
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

import React from 'react';
import '../static/css/info-delivery.css';
import PropTypes from 'prop-types';
import Phone from '../static/images/phone.svg';
import Messages from '../static/images/messages.svg';
import Ticket from '../static/images/ticket.svg';
import Icons from '../static/images/ticket-icons.svg';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const InfoDelivery = (props) => {
  const { pageIndex } = props;
  return (
    <div className="info-background">
      <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ zIndex: 2 }}>
        <div className="info-text-container">
          <p className="info-title">Ticket</p>
          <p className="info-text">
            As you drive through, WheelRight equipment analyzes your tires with cameras and sensors.
            <br />
            <br />
            Within seconds, WheelRight has crunched the data for every individual tire and can deliver the information
            where and how you need it--a text message, a printed ticket, or organized in the cloud for fleet management.
          </p>
        </div>
      </ParallaxComponent>
      <img className="image-messages" src={Messages} alt="Message Bubbles" />
      <img className="image-icons" src={Icons} alt="Ticket Icons" />
      <img className="image-phone" src={Phone} alt="Phone graphic" />
      <img className="image-ticket" src={Ticket} alt="Ticket Graphic" />
    </div>
  );
};

InfoDelivery.propTypes = {
  pageIndex: PropTypes.number,
};

InfoDelivery.defaultProps = {
  pageIndex: -2,
};

export default InfoDelivery;

import React, { useEffect, useState } from 'react';
import '../../../static/css/TicketCar.css';
import PropTypes from 'prop-types';
import psiCar from '../../../static/images/psi-car.svg';
import ParallaxComponent from '../../Parallax/ParallaxComponent';

function CarComponent(props) {
  const [boxwidth, setBoxWidth] = useState(window.innerWidth * 0.06114306254);
  const [tireXOffset, setTireXOffset] = useState(window.innerWidth * 0.045);
  const [tireYOffset, setTireYOffset] = useState((1.0 / window.innerWidth) * 2e5 + window.innerHeight * 0.27 - 325);
  const [componentWidth, setCompWidth] = useState(window.innerWidth * 0.3166053511705686);
  const [componentHeight, setCompHeight] = useState(window.innerHeight * 0.5837486687965922);

  const { isActive } = props;

  function resetLines() {
    setBoxWidth(window.innerWidth * 0.0611430625);
    setTireXOffset(window.innerWidth * 0.045);
    setTireYOffset((1.0 / window.innerWidth) * 2e5 + window.innerHeight * 0.27 - 325);
    setCompWidth(window.innerWidth * 0.3166053511705686);
    setCompHeight(window.innerHeight * 0.5837486687965922);
  }

  useEffect(() => {
    window.addEventListener('resize', resetLines);
    return () => {
      window.removeEventListener('resize', resetLines);
    };
  }, []);

  return (
    <div className="ticket-car-container">
      <div className="ticket-car-box">
        <p>32</p>
      </div>
      <div className="ticket-car-box" style={{ right: 0 }}>
        <p>27</p>
      </div>
      <div className="ticket-car-box" style={{ bottom: 0 }}>
        <p>29</p>
      </div>
      <div className="ticket-car-box" style={{ right: 0, bottom: 0 }}>
        <p>27</p>
      </div>
      <ParallaxComponent shouldParallaxScroll={isActive} transitionTime={2000}>
        <img src={psiCar} alt="Car with Tire Pressure in PSI" />
      </ParallaxComponent>
      <svg>
        <line x1={boxwidth - 5} y1={boxwidth - 5} x2={boxwidth + tireXOffset} y2={boxwidth + tireYOffset} />
        <line
          x1={componentWidth - (boxwidth - 7)}
          y1={boxwidth}
          x2={componentWidth - (boxwidth - 9 + tireXOffset)}
          y2={boxwidth + tireYOffset}
        />
        <line
          x1={boxwidth - 5}
          y1={componentHeight - (boxwidth - 5)}
          x2={boxwidth + tireXOffset}
          y2={componentHeight - (boxwidth + tireYOffset)}
        />
        <line
          x1={componentWidth - (boxwidth - 7)}
          y1={componentHeight - boxwidth}
          x2={componentWidth - (boxwidth - 6 + tireXOffset)}
          y2={componentHeight - (boxwidth + tireYOffset)}
        />
      </svg>
    </div>
  );
}

CarComponent.propTypes = {
  isActive: PropTypes.bool,
};

CarComponent.defaultProps = {
  isActive: false,
};

export default CarComponent;

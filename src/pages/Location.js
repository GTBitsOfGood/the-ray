import React from 'react';
import '../static/css/Location.css';
import target from '../static/images/Ellipse 44.png';

class Location extends React.PureComponent {
  render() {
    return (
      <div className="location-background">
        <img className="location-dot" src={target} alt="Target point" />
        <hr className="location-bar" style={{ width: '853px' }} />
        <div className="split left">
          <div className="location-body">
            <p className="help-location-text">
              The Ray Welcome Center <br />
            </p>
            <p className="help-location-text2">
              The Ray is a proving ground for the evolving ideas and technologies that will transform the transportation
              infrastructure of the future, and it starts on 18 miles of West Georgia&apos;s I-85, and the land and
              communities surrounding it.
            </p>
          </div>
        </div>

        <div className="split right">
          <div className="location-body2" />
        </div>
      </div>
    );
  }
}
export default Location;

import React from 'react';
import '../../static/css/StartMobile.css';
import '../../static/css/responsive.css';
import '../../static/css/commons.css';
import rayFuture from '../../static/images/ray-future.jpg';

class StartMobile extends React.PureComponent {
  render() {
    return (
      <div className="start-body-mobile">
        <img className="start-image" src={rayFuture} alt={rayFuture} />
        <div className="flex-col">
          <p className="start-text ">
            <span className="header-xl">0</span> DEATHS
          </p>
          <p className="start-text">
            <span className="header-xl">0</span> WASTE
          </p>
          <p className="start-text">
            <span className="header-xl">0</span> IMPACT
          </p>
        </div>
        <p>
          <center>Click on one of the projects below to view interactive info and data visualizations</center>
        </p>
      </div>
    );
  }
}

export default StartMobile;

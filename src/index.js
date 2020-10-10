import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './pages/Statistics';
import Wheelright from './pages/Wheelright';
import WhatWeDo from './pages/what-we-do';
import Overview from './pages/overview';
import DriveOver from './pages/drive-over';
import InfoDelivery from './pages/info-delivery';
import './static/css/main.css';
import Navigation from './components/Navigation/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation progressBarColor="#fff">
      <div className="App">
        <Statistics
          text="gallons of gas wasted because of poor tire management"
          image="GasStation"
          number="2,000,000,000"
          selection="0"
        />
      </div>
      <div className="App">
        <Statistics
          text="car accidents due to underinflated tires every year"
          image="Crash"
          number="78,000"
          selection="1"
        />
      </div>
      <div className="App">
        <Statistics
          text="increase in serious accidents by driving on underinflated tires"
          image="FlatTire"
          number="300%"
          selection="1"
        />
      </div>
      <div className="App">
        <Wheelright />
      </div>

      <div className="App">
        <WhatWeDo />
      </div>

      <div className="App">
        <Overview />
      </div>

      <div className="App">
        <DriveOver />
      </div>

      <div className="App">
        <InfoDelivery />
      </div>
    </Navigation>
  </React.StrictMode>,
  document.getElementById('root')
);

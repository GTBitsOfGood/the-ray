import React, { useState } from 'react';
import Statistics from './pages/Statistics';
import Ticket from './pages/Ticket';
import Navigation from './components/Navigation/Navigation';
import Wheelright from './pages/Wheelright';
import WhatWeDo from './pages/what-we-do';
import Overview from './pages/overview';
import DriveOver from './pages/drive-over';
import InfoDelivery from './pages/info-delivery';
import RubberEnd from './pages/RubberEnd';
import Title from './pages/Title';
import UnderInflated from './pages/UnderInflated';
import Find from './pages/Find';
import Help from './pages/Help';
import Location from './pages/Location';
import Newsletter from './pages/Newsletter';
import Partners from './pages/Partners';
import PvMiles from './pages/PvMiles';
import PvMap from './pages/PvMap';
import PvBigNum from './pages/PvBigNum';

function App() {
  const [pageIndex, changePageIndex] = useState(0);

  return (
    <Navigation progressBarColor="#fff" pageIndex={pageIndex} changePageIndex={changePageIndex}>
      <div className="App">
        <PvMap />
      </div>

      <div className="App">
        <PvBigNum pageIndex={1} />
      </div>

      <div className="App">
        <PvBigNum pageIndex={2} targetNum={20} label="MINUTES" percentage={false} transitionTime={2000} />
      </div>

      <div className="App">
        <PvMiles />
      </div>

      <div className="App">
        <Title />
      </div>

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
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="increase in serious accidents by driving on underinflated tires"
          image="FlatTire"
          number="300%"
          selection="1"
        />
      </div>
      <div className="App">
        <RubberEnd />
      </div>

      <div className="App">
        <UnderInflated />
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
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Ticket pageIndex={15} />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Ticket
          pageIndex={16}
          bottomTicket
          subtext="The tread depths (in 32nd inch) of each individual tire is also calculated and displayed."
          dataHeader="Average tire depth: "
          data="10/32 - 11/32 inches"
          note="*Note that these tires are worn"
        />
      </div>
      <div className="App">
        <Find />
      </div>
      <div className="App">
        <Location />
      </div>
      <div className="App">
        <Help />
      </div>
      <div className="App">
        <Newsletter />
      </div>
      <div className="App">
        <Partners />
      </div>
    </Navigation>
  );
}

export default App;

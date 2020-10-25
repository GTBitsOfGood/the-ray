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
// import PvMiles from './pages/PvMiles';
// import PvMap from './pages/PvMap';
// import PvBigNum from './pages/PvBigNum';

function App() {
  const [pageIndex, changePageIndex] = useState(0);

  return (
    <Navigation progressBarColor="#fff" pageIndex={pageIndex} changePageIndex={changePageIndex}>
      {/* <div className="App">
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
      </div> */}

      <div className="App">
        <Title pageIndex={0} />
      </div>

      <div className="App">
        <Statistics
          text="gallons of gas wasted because of poor tire management"
          image="GasStation"
          number="2,000,000,000"
          selection="0"
          pageIndex={1}
        />
      </div>
      <div className="App">
        <Statistics
          text="car accidents due to underinflated tires every year"
          image="Crash"
          number="78,000"
          selection="1"
          pageIndex={2}
        />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="increase in serious accidents by driving on underinflated tires"
          image="FlatTire"
          number="300%"
          selection="1"
          pageIndex={3}
        />
      </div>
      <div className="App">
        <RubberEnd pageIndex={4} />
      </div>

      <div className="App">
        <UnderInflated pageIndex={5} />
      </div>
      <div className="App">
        <Wheelright pageIndex={6} />
      </div>

      <div className="App">
        <WhatWeDo pageIndex={7} />
      </div>

      <div className="App">
        <Overview pageIndex={8} />
      </div>

      <div className="App">
        <DriveOver pageIndex={9} />
      </div>

      <div className="App">
        <InfoDelivery pageIndex={10} />
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
        <Find pageIndex={13} />
      </div>
      <div className="App">
        <Location pageIndex={14} />
      </div>
      <div className="App">
        <Help pageIndex={15} />
      </div>
      <div className="App">
        <Newsletter pageIndex={16} />
      </div>
      <div className="App">
        <Partners pageIndex={17} />
      </div>
    </Navigation>
  );
}

export default App;

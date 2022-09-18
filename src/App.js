import React, { useState } from 'react';

// Start Mobile pages
import StartMobile from './pages/StartMobile/StartMobile';
import StartMobileWheelright from './pages/StartMobile/StartMobileWheelright';
import StartMobilePV4EV from './pages/StartMobile/StartMobilePV4EV';

// Wheelright Pages
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
import Partners from './pages/Partners';
import Newsletter from './pages/Newsletter';
import Start from './pages/Start';

// PV4EV pages
import PVProjection from './pages/PVProjection';
import PVPorts from './pages/PVPorts';
import PV4EV from './pages/PV4EV';
import Problem from './pages/Problem';
import PvSolarStat from './pages/PvSolarStat';
import PvEVStat from './pages/PvEVStat';
import HowItWorks from './pages/How-It-Works';
import PvMiles from './pages/PvMiles';
import PvMap from './pages/PvMap';
import PvBigNum from './pages/PvBigNum';
import PvFuelSavings from './pages/PvFuelSavings';
import EnergyVisPage from './pages/EnergyVisPage';
import CO2VisPage from './pages/CO2VisPage';
import useMediaQuery from './hooks/useMediaQuery';

import './static/css/globals.css';

function App() {
  const [pageIndex, changePageIndex] = useState(0);
  const [startPageIndex, changeStartPageIndex] = useState(0);
  const [project, setProject] = useState('Title');
  const [kwh, setkwh] = useState(0);
  const [CO2, setCO2] = useState(0);
  const isPageMobile = useMediaQuery('(max-width: 850px)');
  // const isPageTablet = useMediaQuery('(max-width: 1000px)');

  return (
    <div>
      <div>
        {project === 'Title' && !isPageMobile && (
          <Start setWheelright={() => setProject('Wheelright')} setPv4ev={() => setProject('PV4EV')} />
        )}
        {project === 'Title' && isPageMobile && (
          <Navigation progressBarColor="#fff" pageIndex={startPageIndex} changePageIndex={changeStartPageIndex}>
            <StartMobile pageIndex={0} />
            <StartMobileWheelright setWheelright={() => setProject('Wheelright')} pageIndex={1} />
            <StartMobilePV4EV setPv4ev={() => setProject('PV4EV')} pageIndex={2} />
          </Navigation>
        )}
      </div>
      {project === 'Wheelright' && (
        <Navigation progressBarColor="#fff" pageIndex={pageIndex} changePageIndex={changePageIndex}>
          <div className="App">
            <Title setProject={setProject} pageIndex={0} />
          </div>

          <div className="App">
            <Statistics
              text="gallons of fuel wasted because of poor tire management each year"
              image="GasStation"
              number="2,000,000,000"
              selection="0"
              pageIndex={1}
            />
          </div>
          <div className="App">
            <Statistics
              text="car crashes due to underinflated tires every year"
              image="Crash"
              number="78,000"
              selection="1"
              pageIndex={2}
            />
          </div>
          <div className="App" style={{ width: '100vw', height: '100vh' }}>
            <Statistics
              text="increase in serious crashes by driving on underinflated tires*"
              image="FlatTire"
              number="300%"
              selection="1"
              pageIndex={3}
              source="* National Highway Traffic Safety Administration (NHTSA)"
            />
          </div>

          <div className="App">
            <UnderInflated pageIndex={4} />
          </div>

          <div className="App">
            <RubberEnd pageIndex={5} />
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
            <Ticket pageIndex={11} />
          </div>
          <div className="App" style={{ width: '100vw', height: '100vh' }}>
            <Ticket
              pageIndex={12}
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
            <Help pageIndex={15} wheel />
          </div>
          <div className="App">
            <Newsletter
              pageIndex={16}
              message="Join the team by making a donation and signing up for our newsletter."
              card
            />
          </div>
          <div className="App">
            <Partners pageIndex={17} />
          </div>
        </Navigation>
      )}
      <div>
        {project === 'PV4EV' && (
          <Navigation progressBarColor="#fff" pageIndex={pageIndex} changePageIndex={changePageIndex}>
            <div className="App">
              <PV4EV setProject={setProject} pageIndex={0} />
            </div>
            <div className="App">
              <Problem selection="Problem" pageIndex={1} />
            </div>
            <div className="App">
              <Problem selection="Solution" pageIndex={2} />
            </div>
            <div className="App">
              <PVProjection pageIndex={3} />
            </div>
            <div className="App">
              <PVPorts pageIndex={4} />
            </div>
            <div className="App">
              <PvSolarStat pageIndex={5} />
            </div>
            <div className="App">
              <PvEVStat pageIndex={6} />
            </div>
            <div className="App">
              <PvFuelSavings pageIndex={7} />
            </div>
            <div className="App">
              <HowItWorks pageIndex={8} />
            </div>{' '}
            <div className="App">
              <PvMap pageIndex={9} />
            </div>
            <PvBigNum pageIndex={10} targetNum={80} percentage label="CHARGE" transitionTime={2500} />
            <PvBigNum pageIndex={11} targetNum={20} label="MINUTES" transitionTime={1000} percentage={false} />
            <div className="App">
              <EnergyVisPage setkwh={setkwh} />
            </div>
            <div className="App">
              <PvMiles kwh={kwh} pageIndex={13} />
            </div>
            <div className="App">
              <CO2VisPage setCO2={setCO2} />
            </div>
            <div className="App">
              <PvMiles CO2={CO2} pageIndex={15} />
            </div>
            <div className="App">
              <Help pageIndex={16} />
            </div>
            <div className="App">
              <Newsletter
                message="Join the team by making a donation and signing up for our newsletter."
                pageIndex={17}
              />
            </div>
            <div className="App">
              <Partners pageIndex={18} />
            </div>
          </Navigation>
        )}
      </div>
    </div>
  );
}

export default App;

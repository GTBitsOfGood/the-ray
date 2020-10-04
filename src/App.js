import React, { useState } from 'react';
import Statistics from './pages/Statistics';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [pageIndex, changePageIndex] = useState(0);

  return (
    <Navigation progressBarColor="#fff" pageIndex={pageIndex} changePageIndex={changePageIndex}>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="gallons of gas wasted because of poor tire management"
          image="GasStation"
          number="2,000,000,000"
          selection={0}
          isActive={pageIndex === 0}
        />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="car accidents due to underinflated tires every year"
          image="Crash"
          number="78,000"
          selection={1}
          isActive={pageIndex === 1}
        />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="increase in serious accidents by driving on underinflated tires"
          image="FlatTire"
          number="300%"
          selection={1}
          isActive={pageIndex === 2}
        />
      </div>
    </Navigation>
  );
}

export default App;

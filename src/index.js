import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './pages/Statistics';
import './static/css/main.css';
import Navigation from './components/Navigation/Navigation';
import Rubber from './pages/Rubber';

ReactDOM.render(
  <React.StrictMode>
    <Navigation progressBarColor="#fff">
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Rubber />
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
      <div className="App">
        <Statistics
          text="increase in serious accidents by driving on underinflated tires"
          image="FlatTire"
          number="300%"
          selection="1"
        />
      </div>
    </Navigation>
  </React.StrictMode>,
  document.getElementById('root')
);

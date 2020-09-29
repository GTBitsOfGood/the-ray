import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Statistics from './Statistics';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Statistics
      text="gallons of gas wasted because of poor tire management"
      image="GasStation"
      number="2,000,000,000"
      selection="0"
    />
    {/* <Statistics
      text="car accidents due to underinflated tires every year"
      image="Crash"
      number="78,000"
      selection="1"
    />
    <Statistics
      text="increase in serious accidents by driving on underinflated tires"
      image="FlatTire"
      number="300%"
      selection="1"
    /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

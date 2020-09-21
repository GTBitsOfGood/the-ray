import React from 'react';
import './App.css';
import ProgressBar from './components/progressBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1> Welcome to the Ray </h1>
        </center>
      </header>
      <ProgressBar bgcolor="#6a1b9a" completed={50} />
    </div>
  );
}

export default App;

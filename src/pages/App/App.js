import React from 'react';

import ExamplePage1 from '../ExamplePage1';
import ExamplePage2 from '../ExamplePage2';
import DummyPage from '../dummyPage';
import DummyTwo from '../dummyTwo';

import Navigation from '../../components/Navigation';

function App() {
  return (
    <Navigation>
      <ExamplePage1 />
      <ExamplePage2 />
      <DummyPage />
      <DummyTwo />
    </Navigation>
  );
}

export default App;

import React from 'react';

import ExamplePage1 from '../ExamplePage1';
import ExamplePage2 from '../ExamplePage2';
import ExamplePage3 from '../ExamplePage3';
import ExamplePage4 from '../ExamplePage4';

import Navigation from '../../components/Navigation';

function App() {
  return (
    <Navigation>
      <ExamplePage1 />
      <ExamplePage2 />
      <ExamplePage3 />
      <ExamplePage4 />
    </Navigation>
  );
}

export default App;

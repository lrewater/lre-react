import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Thing, DatePicker } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <{/* <DatePicker /> */}>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

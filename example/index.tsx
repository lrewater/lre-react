import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '../.';

const App = () => {
  return (
    <div>
      <DatePicker
        name="test"
        label="Test"
        value="2020-05-26"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => e}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

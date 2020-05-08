import React, { useState } from 'react';
import { DatePicker } from '../src';

export default {
  title: 'DatePicker',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = props => {
  const [date, setDate] = useState('2020-05-06');
  return (
    <DatePicker
      name="date_picker"
      label="DatePicker"
      value={date}
      onChange={e => setDate(e.target.value)}
      {...props}
    />
  );
};

export const Outlined = props => {
  const [date, setDate] = useState('2020-05-06');
  return (
    <DatePicker
      name="date_picker"
      label="DatePicker"
      value={date}
      variant="outlined"
      onChange={e => setDate(e.target.value)}
      {...props}
    />
  );
};

export const Filled = props => {
  const [date, setDate] = useState('2020-05-06');
  return (
    <DatePicker
      name="date_picker"
      label="DatePicker"
      value={date}
      variant="filled"
      onChange={e => setDate(e.target.value)}
      {...props}
    />
  );
};

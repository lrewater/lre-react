import React, { useState } from 'react';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  title: 'DatePicker',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props: DatePickerProps) => {
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

export const Outlined = (props: DatePickerProps) => {
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

export const Filled = (props: DatePickerProps) => {
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

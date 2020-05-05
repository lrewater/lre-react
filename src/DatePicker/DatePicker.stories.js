import React from "react";
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import DatePicker from "./DatePicker";

export default {
  title: "DatePicker",
  component: DatePicker
};

export const BasicDatePicker = () => (
  <DatePicker name="basic_date" value="2020-04-30" onChange={() => {}} />
);

export const OutlinedDatePicker = () => (
  <DatePicker
    name="basic_date"
    variant="outlined"
    value="2020-04-30"
    onChange={() => {}}
  />
);

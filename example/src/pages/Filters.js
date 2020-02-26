import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DatePicker, Switch, Select } from "lre-react";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: theme.spacing(5)
  },
  item: {
    margin: theme.spacing(3)
  }
}));

const Filters = props => {
  const classes = useStyles();
  const [filterValues, setFilterValues] = useState({
    date: "2020-02-25",
    switch: true,
    single_select: 2
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFilterValues(prevState => {
      let newValues = { ...prevState };
      if (type === "checkbox") {
        newValues[name] = checked;
      } else {
        newValues[name] = value;
      }
      return newValues;
    });
  };

  const data = [
    { ndx: 1, display: "option 1" },
    { ndx: 2, display: "option 2" },
    { ndx: 3, display: "option 3" }
  ];

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Typography variant="h6" gutterBottom>
          Date Picker
        </Typography>
        <DatePicker
          name="date"
          label="Date"
          value={filterValues.date}
          onChange={handleChange}
        />
      </div>
      <div className={classes.item}>
        <Typography variant="h6" gutterBottom>
          Switch
        </Typography>
        <Switch
          name="switch"
          label="Switch"
          value="switch"
          checked={filterValues.switch}
          onChange={handleChange}
        />
      </div>
      <div className={classes.item}>
        <Typography variant="h6" gutterBottom>
          Single Select
        </Typography>
        <Select
          name="single_select"
          label="Single Select"
          variant="filled"
          valueField="ndx"
          displayField="display"
          data={data}
          value={filterValues.single_select}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Filters;

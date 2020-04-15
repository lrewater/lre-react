import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {
  DatePicker,
  Switch,
  Select,
  MultiSelect,
  TextField,
  TextArea
} from "lre-react";
import { Divider } from "@material-ui/core";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  row: {
    display: "flex"
  },
  item: {
    margin: theme.spacing(3)
  },
  table: {
    flexGrow: 1
  },
  divider: {
    margin: theme.spacing(2, 0, 3, 0)
  }
}));

const Filters = props => {
  const classes = useStyles();
  const [filterValues, setFilterValues] = useState({
    date: "2020-02-25",
    switch: true,
    single_select: 2,
    multi_select: [2],
    text_field: "Example",
    text_area: "longer example text"
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
      <Typography variant="h6" gutterBottom>
        Date Pickers
      </Typography>
      <div className={classes.row}>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            Standard
          </Typography>
          <DatePicker
            name="date"
            label="Date"
            value={filterValues.date}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            Outlined
          </Typography>
          <DatePicker
            name="date"
            label="Date"
            variant="outlined"
            value={filterValues.date}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            Filled
          </Typography>
          <DatePicker
            name="date"
            label="Date"
            variant="filled"
            value={filterValues.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h6" gutterBottom>
        Switch
      </Typography>
      <div className={classes.row}>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            Switch - Primary
          </Typography>
          <Switch
            name="switch"
            label="Enabled"
            value="switch"
            color="primary"
            checked={filterValues.switch}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            Switch - Secondary
          </Typography>
          <Switch
            name="switch"
            label="Enabled"
            value="switch"
            color="secondary"
            checked={filterValues.switch}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            Switch - Small
          </Typography>
          <Switch
            name="switch"
            label="Enabled"
            value="switch"
            color="primary"
            size="small"
            checked={filterValues.switch}
            onChange={handleChange}
          />
        </div>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h6" gutterBottom>
        Selects
      </Typography>
      <div className={classes.row}>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            Single Select
          </Typography>
          <Select
            name="single_select"
            label="Single Select"
            variant="outlined"
            valueField="ndx"
            displayField="display"
            data={data}
            value={filterValues.single_select}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            Multi Select
          </Typography>
          <MultiSelect
            name="multi_select"
            label="Multi Select"
            variant="outlined"
            valueField="ndx"
            displayField="display"
            data={data}
            value={filterValues.multi_select}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            TextField
          </Typography>
          <TextField
            name="text_field"
            label="Text Field"
            value={filterValues.text_field}
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            TextArea
          </Typography>
          <TextArea
            name="text_area"
            label="Text Area"
            value={filterValues.text_area}
            rows="8"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { FilterBar, TextField, FilterActions, FilterAdvanced } from "lre-react";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  btn: {
    padding: theme.spacing(5)
  }
}));

const ReportViews = props => {
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
      <FilterBar onSubmit={() => {}}>
        <TextField
          name="structure_type"
          label="Structure Type"
          value=""
          variant="outlined"
          labelColor="primary"
          outlineColor="primary"
          onChange={() => {}}
        />
        <TextField
          name="structures"
          label="Structures"
          value=""
          variant="outlined"
          labelColor="primary"
          outlineColor="primary"
          onChange={() => {}}
        />
        <TextField
          name="measurement_types"
          label="Measurement Type"
          value=""
          variant="outlined"
          labelColor="primary"
          outlineColor="primary"
          onChange={() => {}}
        />

        <FilterActions>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 8 }}
          >
            Save as View
          </Button>
        </FilterActions>

        <FilterAdvanced>
          <TextField
            name="aggregation_level"
            label="Aggregation Level"
            value=""
            variant="outlined"
            labelColor="primary"
            outlineColor="primary"
            onChange={() => {}}
          />
          <TextField
            name="end_date"
            label="End Date"
            value=""
            variant="outlined"
            labelColor="primary"
            outlineColor="primary"
            onChange={() => {}}
          />
        </FilterAdvanced>
      </FilterBar>
    </div>
  );
};
export default ReportViews;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DateFilter, SwitchFilter } from "lre-react";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: theme.spacing(5)
  }
}));

const Filters = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h6" gutterBottom>
          Date Filter
        </Typography>
        <DateFilter
          name="test"
          label="Date"
          value="2020-02-24"
          onChange={() => {}}
        />
        <SwitchFilter
          name="switch"
          label="Switch"
          value="switch"
          checked={true}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Filters;

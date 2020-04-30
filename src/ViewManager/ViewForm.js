import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const ViewForm = props => {
  const classes = useStyles();
  return (
    <div>
      <Typography>PLACEHOLDER</Typography>
    </div>
  );
};

ViewForm.propTypes = {};

export default ViewForm;

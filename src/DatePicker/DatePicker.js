import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1)
  },
  outlined: {
    border: `1.5px solid ${theme.palette.primary.main}`,
    fontSize: 14
  },
  outlinedLabel: {
    color: theme.palette.primary.main,
    backgroundColor: "#ffffff",
    padding: theme.spacing(0, 0.75)
  },
  filled: {
    fontSize: 14
  },
  filledLabel: {
    color: theme.palette.primary.main
  }
}));

const DatePicker = props => {
  const {
    name,
    label,
    value,
    onChange,
    variant = "standard",
    fullWidth = false
  } = props;
  const classes = useStyles();

  return (
    <TextField
      data-testid="date-filter"
      id={name}
      variant={variant}
      label={label}
      type="date"
      fullWidth={fullWidth}
      name={name}
      value={value}
      className={classes.textField}
      onChange={onChange}
      InputProps={{
        color: "primary",
        classes: { root: classes[variant] }
      }}
      InputLabelProps={{
        shrink: true,
        classes: { root: classes[`${variant}Label`] }
      }}
    />
  );
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default DatePicker;

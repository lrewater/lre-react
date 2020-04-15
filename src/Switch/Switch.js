import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  FormControlLabel,
  Switch as MaterialSwitch
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  }
}));

const Switch = props => {
  const {
    name,
    label,
    checked,
    value,
    variant = "outlined",
    onChange,
    ...other
  } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} variant={variant}>
      <FormControlLabel
        control={
          <MaterialSwitch
            data-testid="switch"
            name={name}
            checked={checked}
            onChange={onChange}
            value={value}
            {...other}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Switch;

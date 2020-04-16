import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { setInputColor } from "../utils";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    "& label": {
      color: props => setInputColor(props.labelColor, theme)
    }
  },
  outlinedTextField: {
    margin: theme.spacing(1),
    "& input + fieldset": {
      borderColor: props => setInputColor(props.outlineColor, theme),
      borderWidth: 1.5
    },
    "& label": {
      color: props => setInputColor(props.labelColor, theme)
    }
  },
  filledTextField: {
    margin: theme.spacing(1),
    "& div": {
      backgroundColor: props => setInputColor(props.fillColor, theme, 0.85)
    },
    "& div:hover": {
      backgroundColor: props => setInputColor(props.fillColor, theme, 0.75)
    },
    "& div:focus": {
      backgroundColor: props => setInputColor(props.fillColor, theme, 0.75)
    },
    "& input:hover": {
      backgroundColor: props => setInputColor(props.fillColor, theme, 0.75),
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    "& input:focus": {
      backgroundColor: props => setInputColor(props.fillColor, theme, 0.75),
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    "& label": {
      color: props => setInputColor(props.labelColor, theme)
    }
  }
}));

const DatePicker = ({
  name,
  label,
  value,
  onChange,
  variant = "standard",
  outlineColor = "default",
  fillColor = "default",
  labelColor = "default",
  width,
  ...other
}) => {
  const classes = useStyles({ outlineColor, fillColor, labelColor });

  /**
   * Utility function used to assign the proper
   * class based on the variant
   * @param {string} variant i.e. standard, outlined, filled
   */
  const setClass = variant => {
    if (variant === "standard") {
      return classes.textField;
    } else if (variant === "outlined") {
      return classes.outlinedTextField;
    } else if (variant === "filled") {
      return classes.filledTextField;
    }
  };

  return (
    <TextField
      data-testid="date-filter"
      type="date"
      variant={variant}
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      className={setClass(variant)}
      style={{ width: width || "auto" }}
      {...other}
    />
  );
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.string,
  width: PropTypes.number,
  outlineColor: PropTypes.string,
  fillColor: PropTypes.string,
  labelColor: PropTypes.string
};

export default DatePicker;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField as MaterialTextField } from "@material-ui/core";
import { setInputColor, setWidth, setClass } from "../utils";

const useStyles = makeStyles(theme => ({
  TextField: {
    margin: theme.spacing(1),
    "& label": {
      color: props => setInputColor(props.labelColor, theme)
    }
  },
  outlinedTextField: {
    margin: theme.spacing(1),
    "& textarea + fieldset": {
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

const TextArea = props => {
  const {
    name,
    label,
    value,
    variant,
    rows = 4,
    onChange,
    width,
    outlineColor,
    fillColor,
    labelColor,
    ...other
  } = props;
  const classes = useStyles({ outlineColor, fillColor, labelColor });

  return (
    <MaterialTextField
      data-testid="text-area"
      id={name}
      name={name}
      multiline
      variant={variant}
      rows={rows}
      label={label}
      value={value}
      onChange={onChange}
      className={setClass(classes, variant)}
      style={{ width: setWidth(width, other.fullWidth) }}
      {...other}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  outlineColor: PropTypes.string,
  fillColor: PropTypes.string,
  labelColor: PropTypes.string
};

export default TextArea;

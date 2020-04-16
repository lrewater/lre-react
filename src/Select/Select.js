import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  FilledInput,
  Input
} from "@material-ui/core";
import { setInputColor } from "../utils";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 400
  },
  outlinedFormControl: {
    margin: theme.spacing(1),
    "& fieldset": {
      borderColor: props => setInputColor(props.outlineColor, theme),
      borderWidth: 1.5
    },
    "& label": {
      color: props => setInputColor(props.labelColor, theme)
    }
  },
  filledFormControl: {
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

const SingleSelectFilter = props => {
  const {
    name,
    label,
    valueField,
    displayField,
    data = [],
    value = "",
    variant = "standard",
    onChange,
    width,
    outlineColor,
    fillColor,
    labelColor,
    ...other
  } = props;
  const classes = useStyles({ outlineColor, fillColor, labelColor });

  const setClass = variant => {
    if (variant === "standard") {
      return classes.formControl;
    } else if (variant === "outlined") {
      return classes.outlinedFormControl;
    } else if (variant === "filled") {
      return classes.filledFormControl;
    }
  };

  return (
    <FormControl
      className={setClass(variant)}
      variant={variant}
      style={{ width: width || "auto" }}
      {...other}
    >
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        data-testid="single-select"
        labelId={`${name}-label`}
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
      >
        {data.map(val => (
          <MenuItem key={val[valueField]} value={val[valueField]}>
            {val[displayField]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SingleSelectFilter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  displayField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  variant: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  outlineColor: PropTypes.string,
  fillColor: PropTypes.string,
  labelColor: PropTypes.string
};

export default SingleSelectFilter;

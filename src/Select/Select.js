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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 400
  },
  outlined: {
    border: `1.5px solid ${theme.palette.primary.main}`,
    fontSize: 14,
    padding: theme.spacing(2)
  },
  outlinedLabel: {
    color: theme.palette.primary.main,
    backgroundColor: "#ffffff"
  },
  filled: {
    fontSize: 14
  },
  filledLabel: {
    color: theme.palette.primary.main
  }
}));

const SingleSelectFilter = props => {
  const {
    name,
    label,
    valueField,
    displayField,
    data = [],
    selected = "",
    variant = "standard",
    onChange,
    width
  } = props;
  const classes = useStyles();

  const setVariantLabelClass = variant => {
    if (variant === "outlined") {
      return { outlined: classes.outlinedLabel };
    } else if (variant === "filled") {
      return { filled: classes.filledLabel };
    } else {
      return {};
    }
  };

  const setVariantClass = variant => {
    if (variant === "outlined") {
      return { outlined: classes.outlined };
    } else if (variant === "filled") {
      return { filled: classes.filled };
    } else {
      return {};
    }
  };

  const setVariantComponent = variant => {
    if (variant === "outlined") {
      return <OutlinedInput data-testid="single-select" />;
    } else if (variant === "filled") {
      return <FilledInput data-testid="single-select" />;
    } else {
      return <Input data-testid="single-select" />;
    }
  };

  return (
    <FormControl
      className={classes.formControl}
      variant={variant}
      style={{ width: width || "auto" }}
    >
      <InputLabel
        id={name}
        variant={variant}
        classes={setVariantLabelClass(variant)}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        name={name}
        value={selected}
        onChange={onChange}
        input={setVariantComponent(variant)}
        classes={setVariantClass(variant)}
        variant={variant}
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
  selected: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SingleSelectFilter;

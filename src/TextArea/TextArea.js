import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField as MaterialTextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1)
  },
  outlined: {
    border: `1.5px solid ${theme.palette.primary.main}!important`,
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

const TextArea = props => {
  const classes = useStyles();
  const {
    name,
    label,
    type = "text",
    value,
    variant,
    fullWidth = false,
    rows = 4,
    onChange
  } = props;

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
      return { root: classes.outlined };
    } else if (variant === "filled") {
      return { root: classes.filled };
    } else {
      return {};
    }
  };

  return (
    <MaterialTextField
      data-testid="text-area"
      id={name}
      multiline
      rows={rows}
      variant={variant}
      label={label}
      fullWidth={fullWidth}
      type={type}
      name={name}
      value={value}
      className={classes.textField}
      onChange={onChange}
      placeholder={label}
      InputProps={{
        color: "primary",
        classes: setVariantClass(variant)
      }}
      InputLabelProps={{
        shrink: true,
        classes: setVariantLabelClass(variant)
      }}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TextArea;

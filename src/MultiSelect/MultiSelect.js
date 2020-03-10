import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  FilledInput,
  Input,
  Button,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 215,
    maxWidth: 230
  },
  outlined: {
    border: `1.5px solid ${theme.palette.primary.main}`,
    fontSize: 14,
    padding: theme.spacing(2)
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
  },
  controls: {
    position: "absolute",
    bottom: 0
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
      minWidth: 250
    }
  }
};

const MultiSelect = props => {
  const {
    name,
    label,
    valueField,
    displayField,
    data = [],
    value = "",
    variant = "standard",
    onChange
  } = props;
  const classes = useStyles();

  /**
   * Utility to assign the correct label class based
   * on the variant
   * @param {string} variant i.e. standard, filled, outlined
   */
  const setVariantLabelClass = variant => {
    if (variant === "outlined") {
      return { outlined: classes.outlinedLabel };
    } else if (variant === "filled") {
      return { filled: classes.filledLabel };
    } else {
      return {};
    }
  };

  /**
   * Utility to assign the correct class based
   * on the variant
   * @param {string} variant i.e. standard, filled, outlined
   */
  const setVariantClass = variant => {
    if (variant === "outlined") {
      return { outlined: classes.outlined };
    } else if (variant === "filled") {
      return { filled: classes.filled };
    } else {
      return {};
    }
  };

  /**
   * Utility to return the correct component based
   * on the variant
   * @param {string} variant i.e. standard, filled, outlined
   */
  const setVariantComponent = variant => {
    if (variant === "outlined") {
      return <OutlinedInput data-testid="multi-select" />;
    } else if (variant === "filled") {
      return <FilledInput data-testid="multi-select" />;
    } else {
      return <Input data-testid="multi-select" />;
    }
  };

  /**
   * Function used to render the text associated with the currently
   * selected values
   * Without this function, the ndx value is displayed instead of the text
   * @param {*} selections
   */
  const setSelectedText = selections => {
    const textValues = data
      .filter(d => selections.includes(d[valueField]))
      .map(d => d[displayField]);
    return textValues.join(", ");
  };

  /**
   * Event handler for the MultiSelect
   * This handler is necessary for implementing the select all/none
   * custom controls
   * @param {object} event JavaScript Event Object
   */
  const handleChange = event => {
    const { value, name } = event.target;
    const text = event.nativeEvent.target.textContent;
    if (value.includes("all/none") && text === "Select All") {
      handleSelectAll(name);
    } else if (value.includes("all/none") && text === "Select None") {
      handleSelectNone(name);
    } else {
      onChange(event);
    }
  };

  /**
   * Event handler for selecting all values in dropdown
   * @param {string} name select name attribute value
   */
  const handleSelectAll = name => {
    onChange({ target: { name, value: data.map(d => d[valueField]) } });
  };

  /**
   * Event handler for de-selecting all values in dropdown
   * @param {string} name select name attribute value
   */
  const handleSelectNone = name => {
    onChange({ target: { name, value: [] } });
  };

  return (
    <FormControl className={classes.formControl} variant="outlined">
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
        multiple
        value={value}
        onChange={handleChange}
        input={setVariantComponent(variant)}
        classes={setVariantClass(variant)}
        variant={variant}
        renderValue={selections => setSelectedText(selections)}
        MenuProps={MenuProps}
      >
        {data.length > 0 && (
          <MenuItem value="all/none">
            <Button color="primary">Select All</Button>
            <Button color="primary">Select None</Button>
          </MenuItem>
        )}
        {data.length > 0 && <Divider />}
        {data.map(val => (
          <MenuItem key={val[valueField]} value={val[valueField]}>
            <Checkbox
              color="primary"
              checked={value.indexOf(val[valueField]) > -1}
            />
            <ListItemText primary={val[displayField]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

MultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  displayField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  variant: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default MultiSelect;

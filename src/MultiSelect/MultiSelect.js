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
  Button,
  Divider
} from "@material-ui/core";
import { setInputColor, setWidth, setClass } from "../utils";

const useStyles = makeStyles(theme => ({
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    "& label": {
      color: props => setInputColor(props.labelColor, theme)
    }
  },
  outlinedFormControl: {
    margin: theme.spacing(1),
    minWidth: 150,
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
    minWidth: 150,
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
    onChange,
    width,
    outlineColor,
    fillColor,
    labelColor,
    ...other
  } = props;
  const classes = useStyles({ outlineColor, fillColor, labelColor });

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
    <FormControl
      className={setClass(classes, variant, "FormControl")}
      variant={variant}
      style={{ width: setWidth(width, other.fullWidth) }}
      {...other}
    >
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        data-testid="multi-select"
        labelId={`${name}-label`}
        id={name}
        name={name}
        label={label}
        multiple
        value={value}
        onChange={handleChange}
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
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  outlineColor: PropTypes.string,
  fillColor: PropTypes.string,
  labelColor: PropTypes.string
};

export default MultiSelect;

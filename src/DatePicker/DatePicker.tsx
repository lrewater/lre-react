import React from 'react';
import { makeStyles, TextField, Theme } from '@material-ui/core';
import { setInputColor, setWidth, setClass } from '../utils';

const useStyles = makeStyles((theme: Theme) => ({
  TextField: {
    margin: theme.spacing(1),
    '& label': {
      color: (props: Props) => setInputColor(props.labelColor, theme),
    },
  },
  outlinedTextField: {
    margin: theme.spacing(1),
    '& input + fieldset': {
      borderColor: (props: Props) => setInputColor(props.outlineColor, theme),
      borderWidth: 1.5,
    },
    '& label': {
      color: (props: Props) => setInputColor(props.labelColor, theme),
    },
  },
  filledTextField: {
    margin: theme.spacing(1),
    '& div': {
      backgroundColor: (props: Props) =>
        setInputColor(props.fillColor, theme, 0.85),
    },
    '& div:hover': {
      backgroundColor: (props: Props) =>
        setInputColor(props.fillColor, theme, 0.75),
    },
    '& div:focus': {
      backgroundColor: (props: Props) =>
        setInputColor(props.fillColor, theme, 0.75),
    },
    '& input:hover': {
      backgroundColor: (props: Props) =>
        setInputColor(props.fillColor, theme, 0.75),
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    '& input:focus': {
      backgroundColor: (props: Props) =>
        setInputColor(props.fillColor, theme, 0.75),
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    '& label': {
      color: (props: Props) => setInputColor(props.labelColor, theme),
    },
  },
}));

export interface Props {
  name: string;
  label: string;
  value: string;
  variant: 'standard' | 'outlined' | 'filled';
  outlineColor: 'default' | 'primary' | 'secondary';
  fillColor: 'default' | 'primary' | 'secondary';
  labelColor: 'default' | 'primary' | 'secondary';
  width: string | number;
  fullWidth: boolean;
  onChange: () => void;
}

const DatePicker: React.FC<Props> = ({
  name,
  label,
  value,
  onChange,
  variant = 'standard',
  outlineColor = 'default',
  fillColor = 'default',
  labelColor = 'default',
  width,
  fullWidth = false,
  ...other
}) => {
  const classes = useStyles({ outlineColor, fillColor, labelColor });

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
      className={setClass(classes, variant)}
      style={{ width: setWidth(width, fullWidth) }}
      {...other}
    />
  );
};

export default DatePicker;

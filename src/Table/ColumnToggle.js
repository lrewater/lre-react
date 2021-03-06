import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Collapse } from "@material-ui/core";
import MultiSelect from "../MultiSelect";

const useStyles = makeStyles(theme => ({
  filters: {
    padding: 15,
    marginBottom: 30,
    backgroundColor: `#f9f9f9`
  },
  formControl: {
    marginTop: 15,
    marginRight: 15,
    minWidth: 120,
    maxWidth: 200
  }
}));

const ColumnToggles = ({
  columns,
  visible,
  selections,
  visibilityHandler,
  handleToggle
}) => {
  const classes = useStyles();

  const handleFilter = event => {
    handleToggle(event.target.value);
  };

  return (
    <Collapse in={visible}>
      <div className={classes.filters} id="column-toggle-section">
        <Typography variant="h6" display="inline" gutterBottom>
          Toggle Columns
        </Typography>
        <Button onClick={visibilityHandler}>Hide</Button>
        <div>
          <MultiSelect
            name="columns"
            label="Columns"
            valueField="accessor"
            displayField="label"
            data={columns}
            value={selections}
            variant="outlined"
            onChange={handleFilter}
            width={250}
          />
        </div>
      </div>
    </Collapse>
  );
};

ColumnToggles.propTypes = {
  columns: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  selections: PropTypes.array.isRequired,
  visibilityHandler: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default ColumnToggles;

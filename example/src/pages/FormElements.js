import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import {
  DatePicker,
  Switch,
  Select,
  MultiSelect,
  TextField,
  TextArea,
  FilterBar,
  FilterAdvanced,
  FilterActions
} from "lre-react";
import { Divider } from "@material-ui/core";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  row: {
    display: "flex"
  },
  item: {
    margin: theme.spacing(3)
  },
  table: {
    flexGrow: 1
  },
  divider: {
    margin: `${theme.spacing(2, 0, 3, 0)}!important`
  },
  filterBar: {
    marginBottom: theme.spacing(2)
  }
}));

const FormElements = props => {
  const classes = useStyles();
  const [filterValues, setFilterValues] = useState({
    date: "2020-02-25",
    switch: true,
    single_select: 2,
    multi_select: [2],
    text_field: "Example",
    text_area: "longer example text"
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFilterValues(prevState => {
      let newValues = { ...prevState };
      if (type === "checkbox") {
        newValues[name] = checked;
      } else {
        newValues[name] = value;
      }
      return newValues;
    });
  };

  const data = [
    { ndx: 1, display: "option 1" },
    { ndx: 2, display: "option 2" },
    { ndx: 3, display: "option 3" }
  ];

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom>
          Filter Bar
        </Typography>
        <FilterBar className={classes.filterBar} onSubmit={() => {}}>
          <TextField
            name="structure_type"
            label="Structure Type"
            value=""
            variant="outlined"
            labelColor="primary"
            outlineColor="primary"
            onChange={() => {}}
          />
          <TextField
            name="structures"
            label="Structures"
            value=""
            variant="outlined"
            labelColor="primary"
            outlineColor="primary"
            onChange={() => {}}
          />
          <TextField
            name="measurement_types"
            label="Measurement Type"
            value=""
            variant="outlined"
            labelColor="primary"
            outlineColor="primary"
            onChange={() => {}}
          />

          <FilterActions>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: 8 }}
            >
              Save as View
            </Button>
          </FilterActions>

          <FilterAdvanced>
            <TextField
              name="aggregation_level"
              label="Aggregation Level"
              value=""
              variant="outlined"
              labelColor="primary"
              outlineColor="primary"
              onChange={() => {}}
            />
            <TextField
              name="end_date"
              label="End Date"
              value=""
              variant="outlined"
              labelColor="primary"
              outlineColor="primary"
              onChange={() => {}}
            />
          </FilterAdvanced>
        </FilterBar>
        <Typography variant="h6" gutterBottom>
          Date Pickers
        </Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Standard
            </Typography>
            <DatePicker
              name="date"
              label="Date"
              value={filterValues.date}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Outlined
            </Typography>
            <DatePicker
              name="date"
              label="Date"
              variant="outlined"
              value={filterValues.date}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Filled
            </Typography>
            <DatePicker
              name="date"
              label="Date"
              variant="filled"
              value={filterValues.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <Divider className={classes.divider} />

        <Typography variant="h6" gutterBottom>
          Switch
        </Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Switch - Primary
            </Typography>
            <Switch
              name="switch"
              label="Enabled"
              value="switch"
              color="primary"
              checked={filterValues.switch}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Switch - Secondary
            </Typography>
            <Switch
              name="switch"
              label="Enabled"
              value="switch"
              color="secondary"
              checked={filterValues.switch}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Switch - Small
            </Typography>
            <Switch
              name="switch"
              label="Enabled"
              value="switch"
              color="primary"
              size="small"
              checked={filterValues.switch}
              onChange={handleChange}
            />
          </div>
        </div>
        <Divider className={classes.divider} />

        <Typography variant="h6" gutterBottom>
          Selects
        </Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Standard Select
            </Typography>
            <Select
              name="single_select"
              label="Single Select"
              variant="standard"
              valueField="ndx"
              displayField="display"
              data={data}
              value={filterValues.single_select}
              onChange={handleChange}
              width={200}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Outlined Select
            </Typography>
            <Select
              name="single_select"
              label="Single Select"
              variant="outlined"
              valueField="ndx"
              displayField="display"
              data={data}
              value={filterValues.single_select}
              onChange={handleChange}
              width={200}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Filled Select
            </Typography>
            <Select
              name="single_select"
              label="Single Select"
              variant="filled"
              valueField="ndx"
              displayField="display"
              data={data}
              value={filterValues.single_select}
              onChange={handleChange}
              width={200}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Standard Multi-Select
            </Typography>
            <MultiSelect
              name="multi_select"
              label="Standard Multi Select"
              variant="standard"
              valueField="ndx"
              displayField="display"
              data={data}
              value={filterValues.multi_select}
              width={200}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Outlined Multi-Select
            </Typography>
            <MultiSelect
              name="multi_select"
              label="Outlined Multi Select"
              variant="outlined"
              valueField="ndx"
              displayField="display"
              data={data}
              value={filterValues.multi_select}
              width={200}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="body1" gutterBottom>
              Filled Multi-Select
            </Typography>
            <MultiSelect
              name="multi_select"
              label="Filled Multi Select"
              variant="filled"
              valueField="ndx"
              displayField="display"
              data={data}
              value={filterValues.multi_select}
              width={200}
              onChange={handleChange}
            />
          </div>
        </div>
        <Divider className={classes.divider} />

        <Typography variant="h6" gutterBottom>
          TextFields
        </Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography variant="h6" gutterBottom>
              Standard TextField
            </Typography>
            <TextField
              name="text_field"
              label="Standard Text Field"
              value={filterValues.text_field}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="h6" gutterBottom>
              Outlined TextField
            </Typography>
            <TextField
              name="text_field"
              label="Outlined Text Field"
              value={filterValues.text_field}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="h6" gutterBottom>
              Filled TextField
            </Typography>
            <TextField
              name="text_field"
              label="Filled Text Field"
              value={filterValues.text_field}
              variant="filled"
              onChange={handleChange}
            />
          </div>
        </div>
        <Divider className={classes.divider} />

        <Typography variant="h6" gutterBottom>
          TextAreas
        </Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography variant="h6" gutterBottom>
              Standard TextArea
            </Typography>
            <TextArea
              name="text_area"
              label="Text Area"
              value={filterValues.text_area}
              rows="8"
              width={300}
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="h6" gutterBottom>
              Outlined TextArea
            </Typography>
            <TextArea
              name="text_area"
              label="Text Area"
              value={filterValues.text_area}
              rows="8"
              width={300}
              variant="outlined"
              outlineColor="primary"
              labelColor="primary"
              onChange={handleChange}
            />
          </div>
          <div className={classes.item}>
            <Typography variant="h6" gutterBottom>
              Outlined TextArea
            </Typography>
            <TextArea
              name="text_area"
              label="Text Area"
              value={filterValues.text_area}
              rows="8"
              width={300}
              variant="filled"
              fillColor="primary"
              labelColor="primary"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormElements;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DatePicker, Switch, Select, Table, EditableTable } from "lre-react";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  filters: {
    display: "flex"
  },
  item: {
    margin: theme.spacing(3)
  },
  table: {
    flexGrow: 1
  }
}));

const Filters = props => {
  const classes = useStyles();
  const [filterValues, setFilterValues] = useState({
    date: "2020-02-25",
    switch: true,
    single_select: 2
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

  const tableData = [
    { ndx: 1, first_name: "Ben", last_name: "Tyler" },
    { ndx: 2, first_name: "Ben", last_name: "Tyler" }
  ];

  const columns = [
    {
      type: "category",
      label: "ID",
      accessor: "ndx",
      filter: {
        enabled: false
      },
      columnToggle: {
        enabled: true
      }
    },
    {
      type: "series",
      label: "First Name",
      accessor: "first_name",
      filter: {
        enabled: false
      },
      columnToggle: {
        enabled: true
      }
    },
    {
      type: "series",
      label: "Last Name",
      accessor: "last_name",
      filter: {
        enabled: false
      },
      columnToggle: {
        enabled: true
      }
    }
  ];

  const editableColumns = [
    -{
      id: "ndx",
      numeric: false,
      disablePadding: true,
      label: "ID",
      chip: false
    },
    {
      id: "first_name",
      numeric: false,
      disablePadding: false,
      label: "First Name",
      chip: false
    },
    {
      id: "last_name",
      numeric: false,
      disablePadding: false,
      label: "Last Name",
      chip: false
    }
  ];

  return (
    <div className={classes.root}>
      <div className={classes.filters}>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            Date Picker
          </Typography>
          <DatePicker
            name="date"
            label="Date"
            value={filterValues.date}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            Switch
          </Typography>
          <Switch
            name="switch"
            label="Switch"
            value="switch"
            checked={filterValues.switch}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6" gutterBottom>
            Single Select
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
          />
        </div>
      </div>
      <div className={classes.table}>
        <Table
          data={tableData}
          columns={columns}
          loading={false}
          title="Table"
          size="small"
          stickyHeader={true}
          height={300}
        />
      </div>
      <div className={classes.table}>
        <EditableTable
          data={tableData}
          columns={editableColumns}
          title="Table"
          handleRowClick={() => {}}
          handleDelete={() => {}}
        />
      </div>
    </div>
  );
};

export default Filters;

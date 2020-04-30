import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, useTheme } from "@material-ui/core";
import { ViewManager } from "lre-react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  btn: {
    padding: theme.spacing(5)
  },
  content: {
    // overflowX: `hidden`,
    [theme.breakpoints.up("md")]: {
      display: `flex`
    }
  }
}));

const ReportViews = props => {
  const classes = useStyles();
  let history = useHistory();

  const handleNavigation = path => {
    history.push(`/${path}`);
  };

  const Reports = [
    {
      title: "Report 1",
      description: "Reporty stuff here",
      path: "reports-views/1"
    },
    {
      title: "Report 1",
      description: "Reporty stuff here",
      path: "reports-views/2"
    }
  ];

  return (
    <div>
      <Navigation />
      <div className={classes.content}>
        <ViewManager reports={Reports} handleNavigation={handleNavigation} />
      </div>
    </div>
  );
};
export default ReportViews;

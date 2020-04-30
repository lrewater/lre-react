import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ReportDrawer from "./ReportDrawer";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const ViewManager = ({ reports, handleNavigation }) => {
  const classes = useStyles();

  return (
    <div>
      <ReportDrawer
        handleNavigation={handleNavigation}
        drawerWidth={340}
        menuItems={reports}
        belowAppbar={true}
      />
    </div>
  );
};

ViewManager.propTypes = {};

export default ViewManager;

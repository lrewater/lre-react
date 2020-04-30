import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import { goTo, checkActive } from "../utils";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: props => props.drawerWidth,
    flexShrink: 0,
    zIndex: 0
  },
  drawerPaper: {
    width: props => props.drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  icon: {
    color: theme.palette.secondary.main
  },
  selected: {
    borderRight: `2px solid ${theme.palette.primary.main}`
  },
  btn: {
    marginTop: theme.spacing(2)
  }
}));

const ReportDrawer = ({
  handleNavigation = () => {},
  drawerWidth = 340,
  menuItems,
  belowAppbar = true
}) => {
  const classes = useStyles({ drawerWidth });

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      {belowAppbar && <div className={classes.toolbar} />}
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem
              button
              selected={checkActive(item.path)}
              classes={{ selected: classes.selected }}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemText primary={item.title} secondary={item.description} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

ReportDrawer.propTypes = {
  handleNavigation: PropTypes.func,
  drawerWidth: PropTypes.number,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      path: PropTypes.string.isRequired
    })
  ),
  belowAppbar: PropTypes.bool
};

export default ReportDrawer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: 1201,
    backgroundColor: `${theme.palette.primary.main}!important`,
    color: "#ffffff!important"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navigation = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LRE React
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/form-elements">
            Forms
          </Button>
          <Button color="inherit" component={Link} to="/reports-views/1">
            Views
          </Button>
          <Button color="inherit" component={Link} to="/tables">
            Tables
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;

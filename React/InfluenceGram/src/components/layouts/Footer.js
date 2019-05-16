import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default class Footer extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            This is the footer
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

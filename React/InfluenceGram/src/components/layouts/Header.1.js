import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "./Icon";

const styles = {
  appBar: {
    backgroundImage:
      "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))"
  }
};
export default class Header extends Component {
  render() {
    return (
      <AppBar position="relative" style={styles.appBar}>
        <Toolbar className="header">
          <Icon />
        </Toolbar>
      </AppBar>
    );
  }
}

import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: true
  };

  toggleDrawer = value => {
    this.setState({ drawerOpen: value });
  };

  handleScroll = () => {
    if (window.scrollY > 10) {
      this.setState({ headerShow: false });
    } else {
      this.setState({ headerShow: true });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">ConcertX </div>
              <div>Live Concert Information</div>
            </div>
            <IconButton
              aria-label="menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
            >
              {" "}
              <MenuIcon />
              <SideDrawer
                open={this.state.drawerOpen}
                onClose={value => this.toggleDrawer(value)}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

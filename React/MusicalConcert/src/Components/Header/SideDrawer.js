import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

const SideDrawer = props => {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={() => props.onClose}>
        <List button onClick={() => console.log("test")}>
          Events Start In
        </List>
        <List button onClick={() => console.log("test")}>
          Venue NFO
        </List>
        <List button onClick={() => console.log("test")}>
          Highlights
        </List>
        <List button onClick={() => console.log("test")}>
          Pricing
        </List>
        <List button onClick={() => console.log("test")}>
          Location
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;

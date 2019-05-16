import React, { Component } from "react";
import "../../ui/css/Feeds.css";

import Grid from "@material-ui/core/Grid";
import Fillbox from "./Fillbox";

export default class Feeds extends Component {
  state = {
    data: [1, 2, 3]
  };
  render() {
    return (
      <div>
        <div className="base">
          {this.state.data.map(value => (
            <Grid key={value} item>
              <Fillbox />
            </Grid>
          ))}
        </div>
      </div>
    );
  }
}

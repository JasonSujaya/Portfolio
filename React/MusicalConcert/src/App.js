import React, { Component } from "react";
import { Element } from "react-scroll";
import "./Resources/styles.css";

import Header from "./Components/Header/Header";
import Featured from "./Components/Featured";
import VenueInfo from "./Components/VenueInfo/index";
import Highlights from "./Components/Highlights/index";
import Pricing from "./Components/Pricing/index";
import Location from "./Components/Location/index";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueInfo">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
      </div>
    );
  }
}

export default App;

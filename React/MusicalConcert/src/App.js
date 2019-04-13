import React, { Component } from "react";
import "./Resources/styles.css";

import Header from "./Components/Header/Header";
import Fetured from "./Components/Featured";
import Featured from "./Components/Featured";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;

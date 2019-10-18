import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: 0, long: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: "There is an error" });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        </div>
      );
    }

    return <Spinner message="Hello"></Spinner>;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App></App>, document.querySelector("#root"));

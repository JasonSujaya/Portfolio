import React, { Component } from "react";
import Searchbar from "./SearchBar";
import youtube from "../youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

export default class App extends Component {
  state = { term: "", videos: [], selectedVideo: null };

  searchChange = event => {
    this.setState({ term: event.target.value });
  };

  componentDidMount() {
    this.searchSubmit("youtube");
  }

  searchSubmit = async searchTerm => {
    const result = await youtube.get("/search", {
      params: {
        q: this.state.term
      }
    });

    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { term, videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <Searchbar
          term={term}
          searchChange={this.searchChange}
          searchSubmit={this.searchSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails selectedVideo={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

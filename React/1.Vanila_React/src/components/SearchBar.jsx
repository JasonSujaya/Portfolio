import React, { Component } from "react";

export default class Searchbar extends Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.searchSubmit(this.props.term);
    // this.props.searchSubmit();
  };

  render() {
    const { searchChange, term, searchSubmit } = this.props;

    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSearch}>
          <div className="field">
            <label>Search for something </label>
            <input type="text" value={term} onChange={searchChange} />
          </div>
        </form>
      </div>
    );
  }
}

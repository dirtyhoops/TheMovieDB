import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    SearchValue: ""
  };

  timeout = null;

  searchOnChange = e => {
    this.setState({ SearchValue: e.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.SearchValue);
    }, 500);
  };

  render() {
    return (
      <div className="wrapper-searchbar">
        <div className="searchbar-content">
          <FontAwesome
            className="fa-search iconsearch"
            name="search"
            size="2x"
          />
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search For a Movie"
            onChange={this.searchOnChange}
            value={this.state.SearchValue}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;

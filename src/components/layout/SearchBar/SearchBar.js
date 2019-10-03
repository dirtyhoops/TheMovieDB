import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = {
    SearchValue: ''
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
      <div className='wrapper-searchbar'>
        <div className='searchbar-content'>
          <input
            type='text'
            className='searchbar-input'
            placeholder='Search for a movie'
            onChange={this.searchOnChange}
            value={this.state.SearchValue}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;

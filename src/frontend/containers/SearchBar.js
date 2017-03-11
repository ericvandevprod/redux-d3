import React, { Component } from 'react';

import Search from './../components/Search/Search';

export default class SearchBar extends Component {
  render() {
    return (
        <form className="search-form">
          <Search />
        </form>
    );
  }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';

import SearchInput from '../../components/Inputs/SearchInput';
import SearchButton from '../../components/Buttons/SearchButton';

let formStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  flexWrap: 'wrap'
};

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  temporaryMethod = (searchTerm) => {
    this.setState({ term: searchTerm });
  };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
  }

  render() {
    return (
        <form style={formStyle} className="search-form" onSubmit={this.onFormSubmit.bind(this)}>
          <SearchInput
              onSearchTermChange={searchTerm => {this.temporaryMethod(searchTerm)}} />
          <SearchButton />
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
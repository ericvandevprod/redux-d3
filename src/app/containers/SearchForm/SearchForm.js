import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/fetchWeather';
import { preloadWeather } from '../../actions/fetchIP';

import SearchInput from '../../components/Inputs/SearchInput';
import SearchButton from '../../components/Buttons/SearchButton';

let formStyle = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  flexWrap: 'wrap'
};

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  };

  componentWillMount = () => {
    this.props.preloadWeather();
  };

  trackSearch = (searchTerm) => {
    this.setState({ term: searchTerm });
  };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
  };

  render() {
    return (
        <form style={formStyle} className="search-form" onSubmit={this.onFormSubmit.bind(this)}>
          <SearchInput
              onSearchTermChange={searchTerm => {this.trackSearch(searchTerm)}} />
          <SearchButton />
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, preloadWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
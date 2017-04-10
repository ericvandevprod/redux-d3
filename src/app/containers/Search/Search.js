import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../../actions/fetchWeather';

import InputComponent from '../../components/Input/Input';
import ButtonComponent from '../../components/Button/Button';

let formStyle = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  flexWrap: 'wrap'
};

class SearchContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.trackSearch = this.trackSearch.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  trackSearch = (searchTerm) => {
    this.setState({ term: searchTerm });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
  };

  componentWillReceiveProps(props) {
    this.setState({ term: props.ip.zip_code });
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      this.props.fetchWeather(nextProps.ip.zip_code);
    }
  }

  render() {
    return (
        <form style={formStyle} className="search-form" onSubmit={this.onFormSubmit.bind(this)}>
          <InputComponent
              onSearchTermChange={searchTerm => {this.trackSearch(searchTerm)}} />
          <ButtonComponent />
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps({ ip }) {
  return { ip };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
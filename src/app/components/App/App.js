import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { preloadWeather } from './../../actions/fetchIP';

import AppBar from './../AppBar/AppBar';
import SearchForm from '../../containers/SearchForm/SearchForm';
import WeatherList from '../../containers/WeatherList/WeatherList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.preloadWeather();
  }

  render() {
    return (
        <div>
          <AppBar />
          <SearchForm />
          <WeatherList />
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ preloadWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
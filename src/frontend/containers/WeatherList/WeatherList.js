import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Tab, Tabs} from 'react-toolbox';
import theme from './WeatherList.css';

class WeatherList extends Component {
  state = {
    index: 1,
    fixedIndex: 1,
    inverseIndex: 1
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  renderWeather = (cityData) => {

  };

  render () {
    return (
        <section>
          <Tabs theme={theme} index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
            <Tab label='Monday'><small>Monday</small></Tab>
            <Tab label='Tuesday'><small>Tuesday</small></Tab>
            <Tab label='Wednesday'><small>Wednesday</small></Tab>
            <Tab label='Thursday'><small>Thursday</small></Tab>
            <Tab label='Friday'><small>Friday</small></Tab>
          </Tabs>
        </section>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
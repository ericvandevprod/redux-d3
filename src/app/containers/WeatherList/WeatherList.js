import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {Tab, Tabs} from 'react-toolbox';
import theme from './WeatherList.css';

class WeatherList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      fixedIndex: 1,
      inverseIndex: 1
    };
    this.getConvertedTime = this.getConvertedTime.bind(this);
    this.reduceData = this.reduceData.bind(this);
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  getConvertedTime = (timestamp) => {
    return moment.unix(timestamp).format('MM-DD-YYYY');
  };

  reduceData = () => {
    console.log(this.props);
    if (Array.isArray(this.props.weather[0].daily.data)) {
      return this.props.weather[0].daily.data.reduce(function(acc, el, i, arr) {
        let currentIndexBase = 0;

        if (arr[0].hasOwnProperty('time') && this.props.weather[0].currently.hasOwnProperty('time')) {
          currentIndexBase = this.getConvertedTime(arr[0].time) === this.getConvertedTime(this.props.weather[0].currently.time) ? 0 : 1;
        }

        if (acc.length < 5) {
          acc.push(arr[i + currentIndexBase]);
        }

        return acc;
      }.bind(this), []);
    }
  };

  render () {
    return (
        <section>
          <Tabs theme={theme} index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
            <Tab label='Monday'><small>Monday</small></Tab>
            <Tab label='Tuesday'><small onClick={this.reduceData}>Tuesday</small></Tab>
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
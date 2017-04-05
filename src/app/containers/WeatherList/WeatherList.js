import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import {Tab, Tabs} from 'react-toolbox';
import theme from './WeatherList.css';

class WeatherList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      fixedIndex: 0,
      inverseIndex: 0
    };
    this.renderWeather = this.renderWeather.bind(this);
  }

  static importComponent(component) {
    if (component.default) {
      return component.default;
    }
    return component;
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  renderWeather = (day, i, days) => {
    let dayName = moment.unix(day.time).format('dddd');
    let Icon = WeatherList.importComponent(require(`./../../icons/${day.icon}`));

    if (i === 0) {
      dayName = 'Today';
    }
    return (
        <Tab label={dayName} key={Math.random() * 10}><div className="svg-container"><Icon /><div>{day.summary}</div></div></Tab>
    );

  };

  render () {
    if (this.props.weather.daily) {
      return (
          <section>
            <Tabs theme={theme} index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
              {this.props.weather.daily.data.map(this.renderWeather)}
            </Tabs>
          </section>
      );
    } else {
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
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
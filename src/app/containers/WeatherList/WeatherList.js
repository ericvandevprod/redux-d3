import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import {Tab, Tabs} from 'react-toolbox';
import Spinner from './../../components/Progress/Spinner';
import Locality from './../../components/Locality/Locality';
import Content from './../../components/Content/Content';
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
    if (component.hasOwnProperty('default')) {
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
        <Tab label={dayName} key={Math.random() * 10}>
          <div style={{width: '200px', textAlign: 'center'}}>
            <Icon />
            <Locality data={this.props.weather} />
            <Content data={day} />
          </div>
        </Tab>
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
          <Spinner />
      );
    }

  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
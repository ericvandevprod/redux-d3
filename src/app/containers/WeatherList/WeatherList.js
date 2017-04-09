import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import {Tab, Tabs} from 'react-toolbox';
import Icon from './../../components/Icon/Icon';
import ContentList from './../../components/List/List';
import Spinner from './../../components/Progress/Spinner';
import colorGenerator from './../../utils/colorGenerator';
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

  componentWillUpdate(nextProps, nextState) {
    if (this.props.weather.timezone !== nextProps.weather.timezone) {
      this.forceUpdate();
    }
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  renderWeather = (day, i, days) => {
    let dayName = moment.unix(day.time).format('dddd');

    if (i === 0) {
      dayName = 'Today';
    }
    return (
        <Tab label={dayName} key={Math.random() * 10}>
          <div style={{width: '400px', textAlign: 'center', pointerEvents: 'none'}}>
            <Icon
                icon={day.icon}
                color={colorGenerator()} />
            <ContentList
                day={day} />
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
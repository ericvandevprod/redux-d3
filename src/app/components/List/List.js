import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import valueItem from './../ValueItem/ValueItem';

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.renderItem = this.renderItem.bind(this);
  }

  formatLocale = (str) => {
    let string = str.split('/').join(' - ');

    return string.split('_').join(' ');
  };

  formatWeatherKey = (str) => {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  };

  formatValue = (key, value) => {
    let formattedValue = '';
    switch(key) {
      case 'temperatureMin':
        formattedValue += Math.round(value) + ' °F';
        return valueItem(formattedValue);
      case 'temperatureMax':
        formattedValue += Math.round(value) + ' °F';
        return valueItem(formattedValue);
      case 'sunriseTime':
        formattedValue += moment.unix(value).format('HH:mm');
        return valueItem(formattedValue);
      case 'sunsetTime':
        formattedValue += moment.unix(value).format('HH:mm');
        return valueItem(formattedValue);
      case 'precipProbability':
        let precip = value * 100;
        formattedValue += precip.toFixed() + ' %';
        return valueItem(formattedValue);
      case 'humidity':
        let hum = value * 100;
        formattedValue += hum.toFixed() + ' %';
        return valueItem(formattedValue);
      case 'windSpeed':
        formattedValue += Math.round(value) + ' mph';
        return valueItem(formattedValue);
      case 'pressure':
        formattedValue += Math.round(value / 33.8638866667) + ' inHg';
        return valueItem(formattedValue);
      case 'visibility':
        formattedValue += Math.round(value);
        formattedValue == 10 ? formattedValue += '+ mi.' : formattedValue += ' mi.';
        return valueItem(formattedValue);
      case 'cloudCover':
        let cover = value * 100;
        formattedValue += cover.toFixed() + ' %';
        return valueItem(formattedValue);
      case 'dewPoint':
        formattedValue += Math.round(value) + ' °F';
        return valueItem(formattedValue);
      default:
        formattedValue = value;
        return valueItem(formattedValue);
    }
  };

  locale = () => {
    return this.formatLocale(this.props.weather.timezone)
  };

  renderItem = (day) => {
    let data = _.pick(day, ['temperatureMin', 'temperatureMax', 'sunriseTime', 'sunsetTime', 'precipProbability', 'humidity', 'windSpeed', 'pressure', 'visibility', 'cloudCover', 'dewPoint']);

    console.log(this.props.day);
    return Object.keys(data).map(function(item, i, arr) {
      return (
          <ListItem
              key={item}
              legend={this.formatWeatherKey(item)}
              rightIcon={this.formatValue(item, data[item])}
          />
      )
    }.bind(this));
  };

  render() {
    return (
        <List>
          <ListSubHeader caption={this.locale()} />
          <ListDivider />
          <ListItem
              caption={this.props.day.summary}
              large
          />
          {this.renderItem(this.props.day)}
        </List>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(ContentList);
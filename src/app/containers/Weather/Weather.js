import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Tab, Tabs } from 'react-toolbox';
import IconComponent from '../../components/Icon/Icon';
import ListComponent from '../../components/List/List';
import SpinnerComponent from '../../components/Spinner/Spinner';
import SnackbarComponent from '../../components/Snackbar/Snackbar';
import colorGenerator from '../../utils/colorGenerator';
import theme from './Weather.css';

class WeatherContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      fixedIndex: 0,
      inverseIndex: 0
    };
    this.renderWeather = this.renderWeather.bind(this);
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this);
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
            <IconComponent
                icon={day.icon}
                color={colorGenerator()} />
            <ListComponent
                day={day} />
          </div>
        </Tab>
    );

  };

  componentWillUpdate(nextProps, nextState) {
    if (this.props.weather.timezone !== nextProps.weather.timezone) {
      this.forceUpdate();
    }
  }

  render () {
    if (this.props.weather.daily) {
      return (
          <section>
            <Tabs theme={theme} index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
              {this.props.weather.daily.data.map(this.renderWeather)}
            </Tabs>
          </section>
      );
    } else if (this.props.weather.error) {
      return (
          <section>
            <SpinnerComponent />
            <SnackbarComponent />
          </section>
      )
    } else {
      return (
          <SpinnerComponent />
      );
    }

  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherContainer);
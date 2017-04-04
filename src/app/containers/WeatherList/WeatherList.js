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
    this.logData = this.logData.bind(this);
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  logData = () => {
    console.log(this.props.weather);
  };

  render () {
    return (
        <section>
          <Tabs theme={theme} index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
            <Tab label='Monday'><small>Monday</small></Tab>
            <Tab label='Tuesday'><small onClick={this.logData}>Tuesday</small></Tab>
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
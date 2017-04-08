import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vivus from 'vivus';

import randomAnimation from './../../utils/randomAnimation';

import styles from './Icons.css';

class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      selectedColor: '#ff5177'
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.fillIcon = this.fillIcon.bind(this);
  }

  fillIcon = () => {
    this.setState({finished: true});
  };

  componentDidMount = () => {
    new Vivus(this.props.icon, {
      type: 'oneByOne',
      duration: 200,
      animTimingFunction: randomAnimation(),
      selfDestroy: true
    }, this.fillIcon.bind(this));
  };

  static importComponent = (component) => {
    if (component.hasOwnProperty('default')) {
      return component.default;
    }
    return component;
  };

  render() {
    let Icon = this.constructor.importComponent(require(`./../../icons/${this.props.icon}`));

    return (
        <Icon
            width="200"
            height="200"
            fill={this.props.color}
            stroke={this.props.color}
            className={this.state.finished ? styles.finished : styles.icon} />
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(Icon);
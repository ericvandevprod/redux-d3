import React, { Component } from 'react';
import Vivus from 'vivus';

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = { icon: props.data };
  }

  componentDidMount() {
    new Vivus(this.state.icon, {
      type: 'oneByOne',
      duration: 300,
      animTimingFunction: Vivus.EASE,
      selfDestroy: true
    });
  }

  importComponent = (component) => {
    if (component.hasOwnProperty('default')) {
      return component.default;
    }
    return component;
  }

  render() {
    let Icon = this.importComponent(require(`./../../icons/${this.state.icon}`));
    return (
        <Icon />
    )
  }
}
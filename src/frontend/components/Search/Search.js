import React, { Component } from 'react';
import { Input } from 'react-toolbox/lib/input';
import theme from './Search.css';

import Button from './../Button/Button';

class InputComponent extends Component {
  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
        <section>
          <Input theme={theme} type='text' label='Search by city or zip' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={30} />
          <Button />
        </section>
    );
  }
}

export default InputComponent;
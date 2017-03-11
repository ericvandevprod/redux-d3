import React, { Component } from 'react';
import { Input } from 'react-toolbox/lib/input';
import theme from './Search.css';

import Button from './../Button/Button';

class InputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = { name: '', phone: '', email: '', hint: '', term: '' };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

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
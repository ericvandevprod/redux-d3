import React, { Component } from 'react';
import { Input } from 'react-toolbox/lib/input';
import theme from './SearchInput.css';

class SearchInput extends Component {

  constructor(props) {
    super(props);

    this.state = { search: '' };
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
    this.props.onSearchTermChange(value);
  };

  render() {
    return (
        <div>
          <Input theme={theme} type='text' label='Search by city or zip' name='search' value={this.state.search} onChange={this.handleChange.bind(this, 'search')} maxLength={30} />
        </div>
    );
  }
}

export default SearchInput;
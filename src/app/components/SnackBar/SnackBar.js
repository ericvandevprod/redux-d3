import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIP } from '../../actions/fetchIP';

import { Snackbar } from 'react-toolbox';
import theme from './SnackBar.css';

class SnackbarError extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      message: ''
    };

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      active: props.error,
      message: props.message
    });
  };

  componentDidMount = () => {
    this._isMounted = true;
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  handleSnackbarClick = () => {
    this.setState({active: false});
  };

  handleSnackbarTimeout = () => {
    if (this._isMounted) {
      this.setState({active: false});
    }
    this.props.fetchIP();
  };

  render() {
    return (
        <section>
          <Snackbar
              theme={theme}
              action="Hide"
              active={this.props.weather.error}
              label={this.props.weather.message}
              timeout={2000}
              onClick={this.handleSnackbarClick}
              onTimeout={this.handleSnackbarTimeout}
              type="warning"
          />
        </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIP }, dispatch);
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarError);
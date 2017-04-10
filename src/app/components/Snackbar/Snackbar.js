import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIP } from '../../actions/fetchIP';

import { Snackbar } from 'react-toolbox';
import theme from './Snackbar.css';

class SnackbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      message: ''
    };

    this.handleSnackbarClick = this.handleSnackbarClick.bind(this);
    this.handleSnackbarTimeout = this.handleSnackbarTimeout.bind(this);
  }

  handleSnackbarClick = () => {
    this.setState({active: false});
  };

  handleSnackbarTimeout = () => {
    if (this._isMounted) {
      this.setState({active: false});
    }
    this.props.fetchIP();
  };

  componentWillReceiveProps(props) {
    this.setState({
      active: props.error,
      message: props.message
    });
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
        <section>
          <Snackbar
              theme={theme}
              action="Hide"
              active={this.props.weather.error}
              label={this.props.weather.message}
              timeout={1500}
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

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarComponent);
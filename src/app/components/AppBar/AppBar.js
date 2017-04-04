import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from '../Logo/Logo.js';
import theme from './AppBar.css';

const AppBarComponent = ({ children, ...other }) => (
    <AppBar {...other} theme={theme}>
      <Logo /> Weather App
      {children}
    </AppBar>
);

AppBarComponent.propTypes = {
  children: PropTypes.node
};

export default AppBarComponent;
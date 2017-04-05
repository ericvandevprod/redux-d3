import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from '../Logo/Logo.js';

import theme from './AppBar.css';

let logoStyle = {
  width: '3.4rem',
  height: '3.4rem',
  marginRight: '1rem',
  fill: '#fff'
};

const AppBarComponent = ({ children, ...other }) => (
    <AppBar {...other} theme={theme}>
      <Logo style={logoStyle}/> Weather App
      {children}
    </AppBar>
);

AppBarComponent.propTypes = {
  children: PropTypes.node
};

export default AppBarComponent;
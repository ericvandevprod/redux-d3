import React from 'react';

import { AppBar } from 'react-toolbox/lib/app_bar';
import LogoComponent from '../Logo/Logo.js';
import theme from './AppBar.css';

let inlineSVGStyles = {
  width: '3.4rem',
  height: '3.4rem',
  marginRight: '1rem',
  fill: '#fff'
};

const AppBarComponent = ({ children, ...other }) => (
    <AppBar {...other} theme={theme}>
      <LogoComponent style={inlineSVGStyles} /> Weather App
    </AppBar>
);

export default AppBarComponent;
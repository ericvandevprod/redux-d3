import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import theme from './Spinner.css';

let container = {
  width: '200px',
  margin: '0 auto'
};

const Spinner = () => (
    <div style={container}>
      <ProgressBar theme={theme} type="circular" mode="indeterminate" multicolor />
    </div>
);

export default Spinner;
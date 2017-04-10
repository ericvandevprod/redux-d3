import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import theme from './Spinner.css';

let container = {
  width: '62px',
  margin: '0 auto',
};

const SpinnerComponent = () => (
    <div style={container}>
      <ProgressBar theme={theme} type="circular" mode="indeterminate" multicolor />
    </div>
);

export default SpinnerComponent;
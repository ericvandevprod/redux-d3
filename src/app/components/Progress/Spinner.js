import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const Spinner = () => (
    <div>
      <ProgressBar type="circular" mode="indeterminate" multicolor />
    </div>
);

export default Spinner;
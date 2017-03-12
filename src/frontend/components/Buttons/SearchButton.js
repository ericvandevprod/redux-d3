import React from 'react';
import { Button } from 'react-toolbox/lib/button';

import theme from './SearchButton.css';

const SearchButton = () => (
    <div>
      <Button theme={theme} icon="youtube_searched_for" label="Search" type="submit" raised accent />
    </div>
);

export default SearchButton;
import React from 'react';
import AppBar from './../AppBar/AppBar';

import SearchForm from '../../containers/SearchForm/SearchForm';
import WeatherList from '../../containers/WeatherList/WeatherList';

const App = () => (
    <div>
      <AppBar />
      <SearchForm />
      <WeatherList />
    </div>
);

export default App;
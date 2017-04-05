import axios from 'axios';

import { fetchWeather } from './fetchWeather';

export const PRELOAD_WEATHER = 'PRELOAD_WEATHER';

export function preloadWeather() {
  const ipURL = 'http://freegeoip.net/json/';

  const request = axios.get(ipURL)
      .then((response) => {
        return fetchWeather(response.data.zip_code);
      })
      .catch((e) => {
        console.log(e.message);
      });

  return {
    type: PRELOAD_WEATHER
  }
}

import axios from 'axios';
import * as env from './../../../env';

const API_KEY = env['API_KEY'];
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log(url);
  return {
    type: FETCH_WEATHER
  }
}


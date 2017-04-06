import axios from 'axios';

export const PRELOAD_WEATHER = 'PRELOAD_WEATHER';

export function preloadWeather() {
  const ipURL = 'http://freegeoip.net/json/';

  const request = axios.get(ipURL)
      .catch((e) => {
        console.log(e.message);
      });

  return {
    type: PRELOAD_WEATHER,
    payload: request
  }
}

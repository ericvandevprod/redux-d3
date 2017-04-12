import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const encodedURI = encodeURIComponent(city);
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}`;
  const ROOT_WEATHER_URL = `https://api.darksky.net/forecast/${process.env.WEATHER_API}`;

  const request = axios.get(geocodeURL)
      .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
           return Promise.reject({
            data: {
              error: true,
              message: 'Unable to find that location'
            }
          });
        }

        let lat = response.data.results[0].geometry.location.lat,
            lng = response.data.results[0].geometry.location.lng,
            weatherUrl = `${ROOT_WEATHER_URL}/${lat},${lng}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
      }).catch((error) => {
        return error;
  });

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}


import React from 'react';

const Content = (props) => {
  return (
    <section>
      <p>{props.data.summary}</p>
      <p>Temp Min: {props.data.temperatureMin}</p>
      <p>Temp Max: {props.data.temperatureMax}</p>
      <p>Humidity: {props.data.humidity}</p>
      <p>Wind Speed: {props.data.windSpeed}</p>
      <p>Cloud Cover: {props.data.cloudCover}</p>
    </section>
  );
};

export default Content;
import React from 'react';

function removeSpecialChars(str) {
  let string = str.split('/').join(', ');

  return string.split('_').join(' ');
}

const Locality = (props) => {
  return (
    <section>
      <h3>{removeSpecialChars(props.data.timezone)}</h3>
      <h1>{props.data.latitude},{props.data.longitude}</h1>
    </section>
  );
};

export default Locality;
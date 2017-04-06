import React from 'react';

const Locality = (props) => {
  return (
    <section>
      <h3>{props.data.timezone}</h3>
      <h1>{props.data.latitude},{props.data.longitude}</h1>
    </section>
  );
};

export default Locality;
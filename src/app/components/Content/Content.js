import React from 'react';

const Content = (props) => {
  return (
    <section>
      <p>{props.data.summary}</p>
    </section>
  );
};

export default Content;
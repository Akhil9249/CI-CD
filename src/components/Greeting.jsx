import React from 'react';

function Greeting({ name }) {
  return <p>Hello test, {name || 'Guest'}!</p>;
}

export default Greeting;
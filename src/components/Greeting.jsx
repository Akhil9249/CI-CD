import React from 'react';

function Greeting({ name }) {
  return <p>Hello test new, {name || 'Guest'}!</p>;
}

export default Greeting;
/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.FC<IGreetingProps> = ({ name }) => (
  <React.Fragment>
    <h3>Greeting:</h3>
    {// Change render based on name:
    name ? (
      <div>Hello {name}!</div>
    ) : (
      <div style={{ color: 'red' }}>No name provided.</div>
    )}
  </React.Fragment>
);

export default Greeting;

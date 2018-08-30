/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

/* eslint react/prop-types:"off" */

const Greeting = ({ className, name }) => (
  <h1 className={className}>Hello {name}</h1>
);

export default Greeting;

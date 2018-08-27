/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const Greeting = props => (
  <i>
    {props.greeting} {props.name}
  </i>
);

export default Greeting;

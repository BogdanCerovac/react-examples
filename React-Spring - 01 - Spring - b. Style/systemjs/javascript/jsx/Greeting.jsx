/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import { Spring } from 'react-spring';

function Greeting() {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => <h1 style={props}>Hello World!</h1>}
    </Spring>
  );
}

export default Greeting;

/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const ImportantAnchor = props => (
  <a {...props}>!!! {props.children} !!!</a>
);

export default ImportantAnchor;
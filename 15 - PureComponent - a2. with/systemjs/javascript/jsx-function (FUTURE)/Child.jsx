/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

const Child = () => {
  console.log('Render Child');
  return <h2>Child</h2>;
};

export default React.pure(Child /* no custom comparison (2nd parameter) */);

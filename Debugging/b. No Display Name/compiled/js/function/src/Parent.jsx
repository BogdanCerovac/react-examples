/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */

import React from 'react';

export default function ({ children }) {
  return (
    <>
      <h2>Parent (not the owner)</h2>
      {children}
    </>
  );
}

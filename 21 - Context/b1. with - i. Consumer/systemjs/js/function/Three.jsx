/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

function Three() {
  return (
    <ColorContext.Consumer>
      {context => <h1 style={{ color: context.color }}>Three</h1>}
    </ColorContext.Consumer>
  );
}

export default Three;

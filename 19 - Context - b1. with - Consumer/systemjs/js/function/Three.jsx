/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import ColorContext from './color-context';
import React from 'react';

function Three() {
  return (
    <ColorContext.Consumer>
      {context => <h1 style={{ color: context.color }}>Three</h1>}
    </ColorContext.Consumer>
  );
}

export default Three;

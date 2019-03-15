/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import BackgroundContext from './background-context';
import ColorContext from './color-context';

function Three() {
  const background = React.useContext(BackgroundContext);
  const { color } = React.useContext(ColorContext);

  return <h1 style={{ background: background.color, color }}>Three</h1>;
}

export default Three;
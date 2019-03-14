/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './color-context';
import Two from './Two';

function One(props) {
  const [color, setColor] = React.useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'green' : 'red'));
  }

  return (
    <ColorContext.Provider value={{ color, handleSwitch }}>
      <Two />
    </ColorContext.Provider>
  );
}

export default One;

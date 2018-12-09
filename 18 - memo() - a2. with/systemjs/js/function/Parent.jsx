/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Child from './Child';

function Parent() {
  const [name, setName] = React.useState('');

  function nameChanged(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <h1>Parent</h1>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the number of Child renders when typing.
      </div>
      <div>
        <input autoFocus onChange={nameChanged} value={name} />
      </div>
      <Child />
    </React.Fragment>
  );
}

export default Parent;

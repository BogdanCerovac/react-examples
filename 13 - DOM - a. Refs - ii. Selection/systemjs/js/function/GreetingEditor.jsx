/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function GreetingEditor() {
  const inputRef = React.useRef(null);
  const [name, setName] = React.useState('World');
  React.useEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} ref={inputRef} value={name} />
      {name && <h1>Hello {name}!</h1>}
    </React.Fragment>
  );
}

export default GreetingEditor;

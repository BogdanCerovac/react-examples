/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe({ value, setValue }) {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Updates are batched for performance reasons.
    // Therefore this won't work:

    // Set property
    setValue(0.4);

    // Use property to set state
    setCount(c => c + 0.6 + value);
  }

  return <a onClick={handleClick}>This link has been clicked {count} times</a>;
}

export default ClickMe;

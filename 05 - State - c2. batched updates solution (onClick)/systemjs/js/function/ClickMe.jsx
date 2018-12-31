/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <a
      onClick={() => {
        setCount(c => c + 0.4);
        setCount(c => c + 0.6);
      }}
    >
      {`This link has been clicked ${count} times`}
    </a>
  );
}

export default ClickMe;

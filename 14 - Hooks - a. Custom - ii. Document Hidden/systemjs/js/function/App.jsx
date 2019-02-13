/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import useIsHidden from './hooks/hidden';

function App() {
  const isHidden = useIsHidden();
  return <h1>Document is {isHidden ? 'Hidden' : 'Visible'}!</h1>;
}

export default App;

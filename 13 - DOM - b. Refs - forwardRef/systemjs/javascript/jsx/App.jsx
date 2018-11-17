/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Greeting from './Greeting';

function App() {
  const myGreeting = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  });

  return <Greeting name="World" ref={myGreeting} />;
}

export default App;

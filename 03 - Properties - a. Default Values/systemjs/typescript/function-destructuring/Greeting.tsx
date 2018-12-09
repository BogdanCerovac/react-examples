/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

function Greeting({ name = 'World' }: IGreetingProps): JSX.Element {
  return <h1>Hello {name}!</h1>;
}

export default Greeting;

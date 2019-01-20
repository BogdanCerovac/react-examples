/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

function Greeting({ name }: IGreetingProps): JSX.Element {
  return <h1>Hello {name}!</h1>;
}

export default Greeting;

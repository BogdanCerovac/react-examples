/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

const ClickMe: React.FC = () => {
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = React.useState(0);

  return (
    <a onClick={/* () => */ setCount(count + 1)}>
      This link has been clicked {count} times
    </a>
  );
};

export default ClickMe;

/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function List(props) {
  React.Children.forEach(props.children, (child, i) =>
    console.log(`Index ${i}: ${JSON.stringify(child)}`)
  );

  return <h1>List</h1>;
}

export default List;

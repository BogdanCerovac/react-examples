/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function List({ children, greeting }) {
  return (
    <ul>
      {React.Children.map(children, (child, i) => (
        <li key={i}>
          {child.props.greeting
            ? child
            : // child is readonly.
              // To changes props/children on the child, use React.cloneElement.
              // New props (2nd argument) will overwrite existing props.
              React.cloneElement(child, { greeting: greeting })}
        </li>
      ))}
    </ul>
  );
}

export default List;

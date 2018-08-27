/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const List = props => (
  <ul>
    {React.Children.map(props.children, (child, i) => (
      <li key={i}>
        {child.props.greeting
          ? child
          : // child is readonly.
            // To changes props/children on the child, use React.cloneElement.
            // New props (2nd argument) will overwrite existing props.
            React.cloneElement(child, { greeting: props.greeting })}
      </li>
    ))}
  </ul>
);

export default List;

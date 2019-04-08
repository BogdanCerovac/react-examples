/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';

ReactDOM.render(
  <div>
    <span>
      <MyComponent />
    </span>
  </div>,
  document.getElementById('app')
);

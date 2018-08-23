/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <GreetingEditor greeting="Hello" />,
  document.getElementById('app')
);

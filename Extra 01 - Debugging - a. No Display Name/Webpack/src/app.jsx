/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<GreetingEditor name="World" />, root);

/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Container from './Container';

ReactDOM.render(
  <Container
    slot1={
      <em>First</em>
    }
    slot2={
      <b>Second</b>
    }
  />,
  document.getElementById('app')
);

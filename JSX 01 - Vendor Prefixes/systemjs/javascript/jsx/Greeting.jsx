/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component {
  render() {
    return (
      <h1 style={{transform: 'rotate(10deg)', msTransform: 'rotate(10deg)', WebkitTransform: 'rotate(10deg)'}}>Hello World!</h1>
    );
  }
}

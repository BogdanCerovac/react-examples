/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './color-context';

class Three extends React.Component {
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}
Three.contextType = ColorContext; // Alternative to using Consumer

export default Three;

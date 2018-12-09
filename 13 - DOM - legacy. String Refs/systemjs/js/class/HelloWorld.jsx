/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/no-string-refs: off */

import React from 'react';

class HelloWorld extends React.Component {
  componentDidMount() {
    this.refs.myH1.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return <h1 ref="myH1">Hello World!</h1>;
  }
}

export default HelloWorld;

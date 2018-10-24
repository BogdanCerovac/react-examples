/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

class Greeting extends React.Component<IGreetingProps, undefined> {
  static defaultProps: IGreetingProps;
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
Greeting.defaultProps = { name: 'World' };

export default Greeting;

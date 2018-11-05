/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
Greeting.defaultProps = { name: 'World' };

ReactDOM.render(<Greeting />, document.getElementById('app'));

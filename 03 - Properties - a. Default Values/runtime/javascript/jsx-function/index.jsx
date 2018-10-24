/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
Greeting.defaultProps = { name: 'World' };

ReactDOM.render(<Greeting />, document.getElementById('app'));

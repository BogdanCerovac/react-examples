/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

const Greeting = props => <h1>Hello {props.name}!</h1>;
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(<Greeting name="World" />, document.getElementById('app'));
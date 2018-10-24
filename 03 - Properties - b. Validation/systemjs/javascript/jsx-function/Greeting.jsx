/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import PropTypes from 'prop-types';
import React from 'react';

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;

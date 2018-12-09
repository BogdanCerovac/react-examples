/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function ErrorMessage({ message }) {
  return React.createElement('div', { style: { color: 'red' } }, message);
}

export default ErrorMessage;

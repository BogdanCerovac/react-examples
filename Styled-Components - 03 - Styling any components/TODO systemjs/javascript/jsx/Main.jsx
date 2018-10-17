/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import Greeting from './Greeting';
import { StyledGreeting } from './StyledGreeting';

/* eslint react/prop-types:"off" */

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Greeting name={'Standard'} />
        <StyledGreeting name={'Styled'} />
      </React.Fragment>
    );
  }
}

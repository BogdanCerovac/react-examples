/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function myProfilerRendered(
    id,
    phase,
    actualTime,
    baseTime,
    startTime,
    commitTime,
    interactions
  ) {
    console.group('Profiler');
    console.log('ID: ', id);
    console.log('Phase (mount|update): ', phase);
    console.log('Actual Time: ', actualTime);
    console.log('Base Time: ', baseTime);
    console.log('Start Time: ', startTime);
    console.log('Commit Time: ', commitTime);
    console.log('Interactions (empty): ', JSON.stringify(interactions));
    console.groupEnd();
  }

  return (
    <React.Fragment>
      {/* Component(s) not measured... */}
      <EditBox onChange={setName} value={name} />

      {/* Component(s) measured... */}
      <React.Profiler id="myProfiler" onRender={myProfilerRendered}>
        <Greeting name={name} />
      </React.Profiler>
    </React.Fragment>
  );
}

export default GreetingEditor;

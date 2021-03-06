/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

//import Greeting from './Greeting';
const getGreeting = () => import('./Greeting');
const Greeting = React.lazy(getGreeting);

function App() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    // Preload Greeting
    getGreeting();
  }, []);

  return (
    <React.Fragment>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Greeting />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}

export default App;

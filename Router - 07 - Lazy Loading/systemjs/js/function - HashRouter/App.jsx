/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <header>
          <h1>App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </header>

        <main>
          <div style={{ color: 'lightgray' }}>
            <em>Show this example with a Network Latency.</em>
          </div>

          <React.Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
          </React.Suspense>
        </main>

        <footer>My copyright</footer>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;

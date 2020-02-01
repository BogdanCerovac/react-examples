/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <BrowserRouter basename="Router/react-router/01%20-%20Simple%20-%20b.%20Multiple%20Matches/systemjs/js/function%20-%20BrowserRouter">
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page-one">Page One</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={['/page1', '/page-one']}>
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </main>

      <footer>My copyright</footer>
    </BrowserRouter>
  );
}

export default App;

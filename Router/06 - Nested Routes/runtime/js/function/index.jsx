/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { HashRouter, Route, Link, Switch } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Page1({ match }) {
  return (
    <>
      <h2>1st page</h2>

      <nav>
        <ul>
          <li>
            <Link to={match.url}>Subpage 1</Link>
          </li>
          <li>
            <Link to={match.url + '/sub2'}>Subpage 2</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={match.url + '/sub2'} component={SubPage2} />
        <Route path={match.url} component={SubPage1} />
      </Switch>
    </>
  );
}

function Page2() {
  return <h2>2nd page</h2>;
}

function SubPage1() {
  return <h3>Subpage 1</h3>;
}

function SubPage2() {
  return <h3>Subpage 2</h3>;
}

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);

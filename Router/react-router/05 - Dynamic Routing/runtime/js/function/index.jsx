/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { HashRouter, Route, Link, useParams } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          {Array.from([1, 2, 3, 4, 5], i => (
            <Link key={i} to={`/${i}`}>
              Page {i}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <Route path="/:id" component={Page} />
        <Route path="/:id" component={PageWithHooks} />
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

function Page({ match }) {
  return <h2>Page {match.params.id}</h2>;
}

function PageWithHooks() {
  const { id } = useParams();
  return <h2>Page {id} - with hooks</h2>;
}

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);

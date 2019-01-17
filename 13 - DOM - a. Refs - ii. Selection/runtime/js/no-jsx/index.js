/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const inputRef = React.useRef(null);
  const [name, setName] = React.useState('World');
  React.useEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e) {
    setName(e.target.value);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', {
      onChange: handleChange,
      ref: inputRef,
      value: name
    }),
    name && React.createElement('h1', null, 'Hello ', name, '!')
  );
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);

/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: '' };

    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onKeyUp(e) {
    this.setState(prevState => ({ pressed: prevState.pressed + e.key }));
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        onKeyUp: this.onKeyUp
      }),
      React.createElement('div', null, 'Pressed: ', this.state.pressed)
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));

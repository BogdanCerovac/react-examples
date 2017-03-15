/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

function logEvent(value, className) {
  var events = document.getElementById('events');
  var newEvent = document.createTextNode(value);
  var item = document.createElement('li');
  item.className = className;
  item.appendChild(newEvent);
  events.appendChild(item);
}

var Hello = React.createClass({
  displayName: 'Hello',
  render: function () {
    logEvent('render() - props: ' + JSON.stringify(this.props) + ' state: ' + JSON.stringify(this.state), 'rendering');
    return React.createElement('h1', null, 'Hello ', this.props.name, '! ', this.state.count, ' time');
  },

  // Initializing
  getDefaultProps: function () {
    var result = null;
    logEvent('getDefaultProps(): ' + JSON.stringify(result));
    return result;
  },
  getInitialState: function () {
    var result = { count: 1 };
    logEvent('getInitialState(): ' + JSON.stringify(result));
    return result;
  },

  // Mounting
  componentWillMount: function () {
    logEvent('componentWillMount()', 'mounting');
  },
  componentDidMount: function () {
    logEvent('componentDidMount()', 'mounting');
  },

  // Updating
  componentWillReceiveProps: function (nextProps) {
    logEvent('componentWillReceiveProps(nextProps: ' + JSON.stringify(nextProps) + ')', 'updating');
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    logEvent('shouldComponentUpdate(nextProps: ' + JSON.stringify(nextProps) + ', nextState: ' + JSON.stringify(nextState) + '): boolean', 'updating');
    return true;
  },
  componentWillUpdate: function (nextProps, nextState) {
    logEvent('componentWillUpdate(nextProps: ' + JSON.stringify(nextProps) + ', nextState: ' + JSON.stringify(nextState) + ')', 'updating');
  },
  componentDidUpdate: function (prevProps, prevState) {
    logEvent('componentDidUpdate(prevProps: ' + JSON.stringify(prevProps) + ', prevState: ' + JSON.stringify(prevState) + ')', 'updating');
    if (prevProps.name === 'Number One') {
      logEvent('-- new state --', 'action');
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
  },

  // Unmounting
  componentWillUnmount: function () {
    logEvent('componentWillUnmount()', 'unmounting');
  }
});

var App = React.createClass({
  displayName: 'App',
  getInitialState: function () {
    return {
      name: 'Number One'
    }
  },
  componentDidMount: function () {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'Number Two' });
  },
  render: function () {
    return React.createElement(Hello, { name: this.state.name });
  }
});

logEvent('-- add component --', 'action');
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);

logEvent('-- remove component --', 'action');
ReactDOM.unmountComponentAtNode(
  document.getElementById('app')
);

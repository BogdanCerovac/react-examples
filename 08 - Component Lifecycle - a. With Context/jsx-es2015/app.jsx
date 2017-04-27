/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

function logEvent(value, className) {
  var events = document.getElementById('events');
  var newEvent = document.createTextNode(value);
  var item = document.createElement('li');
  item.className = className;
  item.appendChild(newEvent);
  events.appendChild(item);
}

class Hello extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = { count: 1 };
    logEvent(`constructor(props: ${JSON.stringify(props)}, context: ${JSON.stringify(context)}) - state: ${JSON.stringify(this.state)}`);
  }
  render() {
    logEvent(`render() - props: ${JSON.stringify(this.props)} state: ${JSON.stringify(this.state)}`, 'rendering');
    return (<h1>Hello {this.props.name}! ({this.state.count}time)</h1>);
  }

  // Mounting
  componentWillMount() {
    logEvent('componentWillMount()', 'mounting');
  }
  componentDidMount() {
    logEvent('componentDidMount()', 'mounting');
  }

  // Updating
  componentWillReceiveProps(nextProps, nextContext) {
    logEvent(`componentWillReceiveProps(nextProps: ${JSON.stringify(nextProps)}, nextContext: ${JSON.stringify(nextContext)})`, 'updating');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    logEvent(`shouldComponentUpdate(nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}, nextContext: ${JSON.stringify(nextContext)}): boolean`, 'updating');
    return true;
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    logEvent(`componentWillUpdate(nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}, nextContext: ${JSON.stringify(nextContext)})`, 'updating');
  }
  componentDidUpdate(prevProps, prevState, prevContext) {
    logEvent(`componentDidUpdate(prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}, prevContext: ${JSON.stringify(prevContext)})`, 'updating');
    if (prevProps.name === 'Number Two' && prevContext.value === 'Context One') {
      logEvent('-- new state --', 'action');
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
  }

  // Unmounting
  componentWillUnmount() {
    logEvent('componentWillUnmount()', 'unmounting');
  }
}
Hello.contextTypes = {
  value: PropTypes.string
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Number One', value: 'Context One' };
  }
  getChildContext() {
    // Never change context, as it can have problems:
    // https://facebook.github.io/react/docs/context.html
    return { value: this.state.value };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'Number Two' });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name === 'Number One' && this.state.name == 'Number Two') {
      logEvent('-- new context --', 'action');
      this.setState({ value: 'Context Two' });
    }
  }
  render() {
    return <Hello name={this.state.name} />;
  }
}
App.childContextTypes = {
  value: PropTypes.string
};

logEvent('-- add component --', 'action');
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

logEvent('-- remove component --', 'action');
ReactDOM.unmountComponentAtNode(
  document.getElementById('app')
);
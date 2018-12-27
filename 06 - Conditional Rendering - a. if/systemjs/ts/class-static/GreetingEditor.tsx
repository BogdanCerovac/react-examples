/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingEditorProps {}

interface IGreetingEditorState {
  name: string;
}

class GreetingEditor extends React.Component<
  IGreetingEditorProps,
  IGreetingEditorState
> {
  state = { name: 'World' };
  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={this.state.name} />
        {// Only render when a name is truthy:
        this.state.name && <h1>Hello {this.state.name}!</h1>}
      </React.Fragment>
    );
  }
}

export default GreetingEditor;

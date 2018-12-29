/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingEditorProps {}

interface IGreetingEditorState {
  name: string;
  other: string;
}

class GreetingEditor extends React.Component<
  IGreetingEditorProps,
  IGreetingEditorState
> {
  state: IGreetingEditorState = { name: 'World', other: 'More state' };
  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
        <h2>{this.state.other}</h2>
      </React.Fragment>
    );
  }
}

export default GreetingEditor;

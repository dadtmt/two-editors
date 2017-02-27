import React, { Component } from 'react';
import './App.css';

import RichTextEditor from './RichTextEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RichTextEditor />
        <RichTextEditor />
      </div>
    );
  }
}

export default App;

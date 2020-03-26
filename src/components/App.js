import React, { Component } from 'react';
import ConnDisplay from './Display';
import ConnButtons from './Buttons';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id="calculator">
        <ConnDisplay />
        <ConnButtons />
      </div>
    );
  }

}

export default App;

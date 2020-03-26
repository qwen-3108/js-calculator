import React, { Component } from 'react';
import { mapStateToProps } from './memory';
import { connect } from 'react-redux';
import './Display.css';

class Display extends Component {

  render() {
    const {input, output} = this.props.memory;
    return (
      <div id="display">
        <div id="log"><p>{input}</p></div>
        <div id="input"><p>{output}</p></div>
      </div>
    );
  }

}

const ConnDisplay = connect(mapStateToProps)(Display);
export default ConnDisplay;

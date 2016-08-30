import React, { Component } from 'react';
import './Keyboard.css';

class Keyboard extends Component {

  constructor() {
    super();
    this.setState = {
      keys: 0
    }
  }

  render() {
    return(
      <div className="keyboard">
      <div></div>
      <button>A</button>
      <button>S</button>
      <button>D</button>
      <button>F</button>
      <button>G</button>
      <button>H</button>
      <button>J</button>
      <button>K</button>
      <button>L</button>
      <button>;</button>
      </div>
    )
  }
}
export default Keyboard

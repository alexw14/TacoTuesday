import React, { Component } from 'react';
import './FallingArea.css';
import FallingTaco from '../FallingObjects/FallingTaco';

class FallingArea extends Component {

  state = {
    obj1: {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 400
    }
  }

  start = () => {
    console.log('start')
  }


  render() {
    return (
      <div className="game-area-container">
        <button onClick={this.start}>Start Game</button>
        <FallingTaco
          startX={this.state.obj1.startX}
          startY={this.state.obj1.startY}
          endX={this.state.obj1.endX}
          endY={this.state.obj1.endY}
        />
      </div>
    );
  }
}

export default FallingArea;
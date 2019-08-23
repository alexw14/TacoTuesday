import React, { Component } from 'react';
import './GameArea.css';
import FallingTaco from '../FallingObjects/FallingTaco';

class GameArea extends Component {

  state = {
    x: 0,
    y: 0
  }

  start = () => {
    setInterval(() => {
      let newY = this.state.y;
      newY += 1;
      if (newY > 400) {
        return;
      } else {
        this.setState({ y: newY })
      }
    }, 10);
  }


  render() {
    return (
      <div className="game-area-container">
        <button onClick={this.start}>Start Game</button>
        <FallingTaco
          x={this.state.x}
          y={this.state.y}
        />
      </div>
    );
  }
}

export default GameArea;
import React, { Component } from 'react';
import './GamePage.css';
import LebronHeadSlider from '../../components/LeBronHeadSlider/LeBronHeadSlider';

class GamePage extends Component {

    state = {
        pos: 0
    }

    handleMove = (direction) => {
        let newPos = this.state.pos;
        if (direction === 'left') newPos -= 10;
        if (direction === 'right') newPos += 10;
        if (newPos < -120 || newPos > 120) return;
        this.setState({ pos: newPos });
    }

    render() {
        return (
            <LebronHeadSlider
                handleMoveLeft={(d) => this.handleMove(d)}
                handleMoveRight={(d) => this.handleMove(d)}
                pos={this.state.pos}
            />
        )
    }
}

export default GamePage;
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
        if (newPos < -80 || newPos > 80) return;
        this.setState({ pos: newPos });
    }

    render() {
        return (
            <LebronHeadSlider
                pos={this.state.pos}
                handleMove={(d) => this.handleMove(d)}
            />
        )
    }
}

export default GamePage;
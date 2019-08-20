import React, { Component } from 'react';
import './GamePage.css';
import LebronHeadSlider from '../../components/LeBronHeadSlider/LeBronHeadSlider';

class GamePage extends Component {

    state = {
        pos: 0
    }

    handleMoveLeft = () => {
        let newPos = this.state.pos;
        if (newPos === -120) return;
        newPos -= 10;
        this.setState({ pos: newPos });
    }

    handleMoveRight = () => {
        let newPos = this.state.pos;
        if (newPos === 120) return;
        newPos += 10;
        this.setState({ pos: newPos });
    }

    render() {
        return (
            <LebronHeadSlider
                handleMoveLeft={() => this.handleMoveLeft()}
                handleMoveRight={() => this.handleMoveRight()}
                pos={this.state.pos}
            />
        )
    }
}

export default GamePage;
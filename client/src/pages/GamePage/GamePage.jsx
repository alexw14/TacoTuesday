import React, { Component } from 'react';
import './GamePage.css';
import HealthBar from '../../components/HealthBar/HealthBar';
import GameArea from '../../components/GameArea/GameArea';
import LebronHeadSlider from '../../components/LeBronHeadSlider/LeBronHeadSlider';

class GamePage extends Component {

    state = {
        pos: 0,
        numHearts: 4,
        healthBar: [1, 1, 1, 1],
        gameStart: false
    }

    handleMove = (direction) => {
        let newPos = this.state.pos;
        if (direction === 'left') newPos -= 10;
        if (direction === 'right') newPos += 10;
        if (newPos < -80 || newPos > 80) return;
        this.setState({ pos: newPos });
    }

    handleAddHealth = () => {
        let currentNumHearts = this.state.numHearts;
        currentNumHearts += 1;
        if (currentNumHearts > 4) return;
        let newHealthBar = Array(currentNumHearts).fill(1);
        while (newHealthBar.length < 4) {
            newHealthBar.push(0.25);
        };
        this.setState({
            numHearts: currentNumHearts,
            healthBar: newHealthBar
        });
    }

    handleMinusHealth = () => {
        let currentNumHearts = this.state.numHearts;
        currentNumHearts -= 1;
        if (currentNumHearts < 0) return;
        let newHealthBar = Array(currentNumHearts).fill(1);
        while (newHealthBar.length < 4) {
            newHealthBar.push(0.25);
        };
        this.setState({
            numHearts: currentNumHearts,
            healthBar: newHealthBar
        });
    }

    startGame = () => {

    }

    render() {
        return (
            <div>
                <HealthBar
                    healthBar={this.state.healthBar}
                />
                <button onClick={this.handleAddHealth}>+ Heart</button>
                <button onClick={this.handleMinusHealth}>- Heart</button>
                <GameArea />
                <LebronHeadSlider
                    pos={this.state.pos}
                    handleMove={(d) => this.handleMove(d)}
                />
            </div>
        )
    }
}

export default GamePage;
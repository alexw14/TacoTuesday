import React from 'react';
import './StartGameButton.css';
import { Link } from 'react-router-dom';

const StartGameButton = (props) => {
    return (
        <div className="StartGameButton">
            <Link to="/GamePage">Start Game </Link>     
        </div>
    )
}

export default StartGameButton;
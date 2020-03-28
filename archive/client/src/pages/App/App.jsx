import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import GamePage from '../GamePage/GamePage';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="game-container">
          <Switch>
            <Route exact path="/" render={() =>
              <HomePage />
            } />

            <Route exact path="/gamepage" render={() =>
              <GamePage />
            } />

          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
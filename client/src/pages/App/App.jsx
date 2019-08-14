import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import LeBronHead from '../../assets/images/Lebron_Head_Main.png';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import GamePage from '../GamePage/GamePage';

class App extends Component {
  render() {

    return (
      <div className="App" style={{ backgroundColor: '#FDBA21', height:'100vh' }}>
        <div style={{ textAlign: 'center'}}>
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
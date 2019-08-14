import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import LeBronHead from '../../assets/images/Lebron_Head_Main.png';

class App extends Component {
  render() {

    return (
      <div className="App" style={{ backgroundColor: '#FDBA21', height:'100vh' }}>
        <div style={{ textAlign: 'center'}}>
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
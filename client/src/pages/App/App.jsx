import React, { Component } from 'react';

import LeBronHead from '../../assets/images/Lebron_Head_Main.png';

class App extends Component {
  render() {

    return (
      <div className="App" style={{ backgroundColor: '#FDBA21', height:'100vh' }}>
        <div style={{ textAlign: 'center'}}>
          <h1>Taco</h1>
          <img className="lebron-head" src={LeBronHead} style={{ height: '230px', width: '230px' }} alt='Lebron Head'/>
          <h1>Tuesday</h1>
        </div>
      </div>
    );
  }
}

export default App;
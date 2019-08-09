import React, { Component } from 'react';

import LeBronHead from './assets/images/Lebron_Head_Main.png';

class App extends Component {
  render() {

    return (
      <div style={{ backgroundColor: '#FDBA21', height:'100vh' }}>
        <div style={{ textAlign: 'center', paddingTop: '150px'}}>
          <h1>Taco</h1>
          <img src={LeBronHead} style={{ height: '230px', width: '230px' }} alt='Lebron Head'/>
          <h1>Tuesday</h1>
        </div>
      </div>
    );
  }
}

export default App;
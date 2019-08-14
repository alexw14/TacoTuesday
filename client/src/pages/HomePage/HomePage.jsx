import React from 'react';
import './HomePage.css';
import StartGameButton from '../../components/StartGameButton/StartGameButton';

class HomePage extends React.Component{



    render() {
        return (
            <div className="LandingPage" style={{ backgroundColor: '#FDBA21', height:'100vh' }}>
                <div>
                    <StartGameButton />
                </div>
            </div>
        )
    }
}

export default HomePage;
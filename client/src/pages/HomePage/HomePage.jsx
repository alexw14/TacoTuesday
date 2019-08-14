import React from 'react';
import './HomePage.css';
import StartGameButton from '../../components/StartGameButton/StartGameButton';
import LeBronHeadLanding from '../../components/LeBronHeadLanding/LeBronHeadLanding';

class HomePage extends React.Component{



    render() {
        return (
            <div className="LandingPage">
                <div className="LandingLogo">
                    <LeBronHeadLanding />
                </div>
                <div>
                    <StartGameButton />
                </div>
            </div>
        )
    }
}

export default HomePage;
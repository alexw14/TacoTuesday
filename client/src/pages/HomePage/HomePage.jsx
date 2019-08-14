import React from 'react';
import './HomePage.css';
import StartGameButton from '../../components/StartGameButton/StartGameButton';
import LeBronHeadLanding from '../../components/LeBronHeadLanding/LeBronHeadLanding';
import Taco from '../../assets/images/svg/Taco_183x42.svg';
import Tuesday from '../../assets/images/svg/Tuesday_203x33.svg';

class HomePage extends React.Component{



    render() {
        return (
            <div className="LandingPage">
                <div className="LandingLogo">
                    <img src={Taco} />
                    <LeBronHeadLanding />
                    <img src={Tuesday} />
                    <StartGameButton />
                </div>
            </div>
        )
    }
}

export default HomePage;
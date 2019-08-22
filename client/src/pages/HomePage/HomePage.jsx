import React from 'react';
import './HomePage.css';
import StartGameButton from '../../components/StartGameButton/StartGameButton';
import LeBronHeadLanding from '../../components/LeBronHeadLanding/LeBronHeadLanding';
import TacoText from '../../assets/images/svg/Taco_183x42.svg';
import TuesdayText from '../../assets/images/svg/Tuesday_203x33.svg';
import HomePageTacos from '../../components/HomePageTacos/HomePageTacos';

class HomePage extends React.Component {

    render() {
        return (
            <div className="LandingPage-Container">
                <HomePageTacos />
                <img id="taco-text" src={TacoText} />
                <LeBronHeadLanding />
                <img id="tuesday-text" src={TuesdayText} />
                <StartGameButton />
            </div>
        )
    }
}

export default HomePage;
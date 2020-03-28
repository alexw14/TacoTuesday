import React from 'react';
import './HomePage.css';
import StartGameButton from '../../components/StartGameButton/StartGameButton';
import LeBronHeadLanding from '../../components/LeBronHeadLanding/LeBronHeadLanding';
import TacoText from '../../assets/images/svg/Taco_Text.svg';
import TuesdayText from '../../assets/images/svg/Tuesday_Text.svg';
import HomePageTacos from '../../components/HomePageTacos/HomePageTacos';

class HomePage extends React.Component {

    render() {
        return (
            <div className="LandingPage-Container">
                <HomePageTacos />
                <img id="taco-text" src={TacoText} alt="Taco" />
                <LeBronHeadLanding />
                <img id="tuesday-text" src={TuesdayText} alt="Tuesday" />
                <StartGameButton />
            </div>
        )
    }
}

export default HomePage;
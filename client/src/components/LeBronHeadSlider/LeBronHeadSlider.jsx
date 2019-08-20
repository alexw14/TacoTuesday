import React from 'react';
import MainLebronHead from '../../assets/images/Lebron_Head_Default.png';
import LeftArrow from '../../assets/images/svg/Left_Arrows_31x35_31x35.svg';
import RightArrow from '../../assets/images/svg/Right_Arrows_31x35.svg';
import './LeBronHeadSlider.css'

const LeBronHeadSlider = (props) => {

    return (
        <div className="game-slider-container">
            <div
                className='left-arrow'
                onClick={() => props.handleMoveLeft()}
            >
                <img src={LeftArrow} />
            </div>
            <div
                className='LebronHeadSlider'
                style={{ transform: `translate(${props.pos}px, 0px)` }}
            >
                <img src={MainLebronHead} />
            </div>
            <div
                className='right-arrow'
                onClick={() => props.handleMoveRight()}
            >
                <img src={RightArrow} />
            </div>
        </div>
    );
};

export default LeBronHeadSlider;
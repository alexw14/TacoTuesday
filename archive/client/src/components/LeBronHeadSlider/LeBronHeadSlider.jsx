import React from 'react';
import MainLebronHead from '../../assets/images/Lebron_Head_Default.png';
import LeftArrow from '../../assets/images/svg/Left_Arrows.svg';
import RightArrow from '../../assets/images/svg/Right_Arrows.svg';
import './LeBronHeadSlider.css'

const LeBronHeadSlider = (props) => {

    return (
        <div className="game-slider-container">
            <div
                className='left-arrow'
                onClick={() => props.handleMove('left')}
            >
                <img src={LeftArrow} alt="left-arrow" />
            </div>
            <div
                className='LebronHeadSlider'
                style={{ transform: `translate(${props.pos}px, 0px)` }}
            >
                <img src={MainLebronHead} alt="Lebron" />
            </div>
            <div
                className='right-arrow'
                onClick={() => props.handleMove('right')}
            >
                <img src={RightArrow} alt="right-arrow" />
            </div>
        </div>
    );
};

export default LeBronHeadSlider;
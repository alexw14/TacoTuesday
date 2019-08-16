import React from 'react';
import MainLebronHead from '../../assets/images/Lebron_Head_Default.png';
import './LeBronHeadSlider.css'

const LeBronHeadSlider = (props) => {

    return (
        <div>
            <div onClick={() => props.handleMoveLeft()} style={{ cursor: 'pointer', padding: '20px' }}> Left </div>
            <div
                className="LebronHeadSlider"
                style={{ transform: `translate(${props.pos}px, 0px)` }}
            >
                <img style={{ height: '15vh' }}
                    src={MainLebronHead}
                />
            </div>
            <div onClick={() => props.handleMoveRight()} style={{ cursor: 'pointer', padding: '20px' }}> Right </div>
        </div>
    );
};

export default LeBronHeadSlider;
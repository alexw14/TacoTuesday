import React from 'react';
import MainLebronHead from '../../assets/images/Lebron_Head_Default.png';
import './LeBronHeadSlider.css'

const LeBronHeadSlider = (props) => {

    return (
        <div>
            <button onClick={() => props.handleMoveLeft()} style={{ cursor: 'pointer', padding: '20px' }}> Left </button>
            <div
                className="LebronHeadSlider"
                style={{ transform: `translate(${props.pos}px, 0px)` }}
            >
                <img style={{ height: '15vh' }}
                    src={MainLebronHead}
                />
            </div>
            <button onClick={() => props.handleMoveRight()} style={{ cursor: 'pointer', padding: '20px' }}> Right </button>
        </div>
    );
};

export default LeBronHeadSlider;
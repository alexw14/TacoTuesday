import React from 'react';
import './LeBronHeadLanding.css'
import LebronHead from '../../assets/images/Lebron_Head_Main_Outline.png';

const LeBronHeadLanding = (props) => {
    return (
        <div className="LeBronHeadLanding">
            <img src={LebronHead} alt="Lebron" />
        </div>
    )
}

export default LeBronHeadLanding;
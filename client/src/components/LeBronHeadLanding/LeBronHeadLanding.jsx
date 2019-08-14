import React from 'react';
import './LeBronHeadLanding.css'
import LebronHead from '../../assets/images/Lebron_Head_Main.png';

const LeBronHeadLanding = (props) => {
    return (
        <div className="LeBronHeadLanding">
            <img style={{ height: '40vh'}} src={LebronHead} />
        </div>
    )
}

export default LeBronHeadLanding;
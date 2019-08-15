import React, { Component } from 'react';
import MainLebronHead from '../../assets/images/Lebron_Head_Default.png';
import './LeBronHeadSlider.css'

class LebronHeadSlider extends Component {
    

    render() {
        return (
            <div className="LebronHeadSlider">
                <img style={{ height: '15vh' }} src={MainLebronHead} />
            </div>
        )
    }
}

export default LebronHeadSlider
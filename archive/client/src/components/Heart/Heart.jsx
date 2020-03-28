import React from 'react';
import HeartIcon from '../../assets/images/svg/Health.svg';
import './Heart.css';

const Heart = (props) => {
  return (
    <div className="heart-container" style={{opacity:`${props.opacity}`}}>
      <img src={HeartIcon} alt="heart" />
    </div>
  );
};

export default Heart;
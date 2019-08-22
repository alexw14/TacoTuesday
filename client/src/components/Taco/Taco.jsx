import React from 'react';
import TacoImage from '../../assets/images/svg/Taco.svg';
import './Taco.css'

const Taco = (props) => {

  return (
    <div
      className="taco-container"
      style={{ transform: `translate(${props.x}, ${props.y}) rotate(${props.angle})` }}
    >
      <img src={TacoImage} width={props.width} height={props.height} alt="taco" />
    </div>
  );
};

export default Taco;
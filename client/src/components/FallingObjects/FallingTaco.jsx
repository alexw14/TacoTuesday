import React from 'react';
import TacoDrop from '../../assets/images/svg/Taco_Drop.svg';

const FallingTaco = (props) => {
  return (
    <div style={{ transform: `translate(${props.x}px, ${props.y}px)` }}>
      <img src={TacoDrop} width='100px' height='100px' alt="Taco" />
    </div>
  );
};

export default FallingTaco;
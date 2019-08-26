import React from 'react';
import TacoDrop from '../../assets/images/svg/Taco_Drop.svg';

const FallingTaco = (props) => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    transform: `translate(${props.x}px, ${props.y}px)`
  }

  return (
    <div style={style}>
      <img src={TacoDrop} width='100px' height='100px' alt="Taco" />
    </div>
  );
};

export default FallingTaco;
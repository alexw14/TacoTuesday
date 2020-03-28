import React from 'react';
import TacoDrop from '../../assets/images/svg/Taco_Drop.svg';

const FallingTaco = (props) => {

  const path = Array.from(Array(400).keys());
  console.log(path)

  const style = {
    display: 'flex',
    justifyContent: 'center',
    transform: `translate(${props.startX}px, ${props.startY}px)`
  }

  return (
    <div style={style}>
      <img src={TacoDrop} width='100px' height='100px' alt="Taco" />
    </div>
  );
};

export default FallingTaco;
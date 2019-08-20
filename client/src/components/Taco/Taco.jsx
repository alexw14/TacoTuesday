import React from 'react';
import TacoImage from '../../assets/images/svg/Taco_37x50.svg';

const Taco = (props) => {
  return (
    <div style={{ position: 'absolute' }}>
      <img src={TacoImage} width={props.width} height={props.height} />
    </div>
  );
};

export default Taco;
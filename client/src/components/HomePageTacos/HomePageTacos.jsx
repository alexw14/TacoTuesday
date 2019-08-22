import React from 'react';
import Taco from '../Taco/Taco';

const HomePageTacos = () => {

  // create an array of taco objects with different width, height, orientation property
  const tacos = [
    {
      width: '100px',
      height: '100px',
      x: '-200px',
      y: '0px',
      angle: '-90deg'
    },
    {
      width: '55px',
      height: '55px',
      x: '20px',
      y: '40px',
      angle: '-25deg'
    },
    {
      width: '90px',
      height: '90px',
      x: '-175px',
      y: '170px',
      angle: '0deg'
    },
    {
      width: '100px',
      height: '100px',
      x: '100px',
      y: '145px',
      angle: '-75deg'
    },
    {
      width: '90px',
      height: '90px',
      x: '-160px',
      y: '415px',
      angle: '-85deg'
    },
    {
      width: '140px',
      height: '140px',
      x: '90px',
      y: '300px',
      angle: '20deg'
    },
    {
      width: '120px',
      height: '120px',
      x: '-225px',
      y: '550px',
      angle: '-70deg'
    },
    {
      width: '55px',
      height: '55px',
      x: '-25px',
      y: '630px',
      angle: '-5deg'
    },
    {
      width: '85px',
      height: '85px',
      x: '105px',
      y: '580px',
      angle: '-90deg'
    }
  ];

  // map through the tacos array and generate Taco component
  const generateTacos = (tacos) => {
    return tacos.map((taco, i) => (
      <Taco
        key={i}
        width={taco.width}
        height={taco.height}
        x={taco.x}
        y={taco.y}
        angle={taco.angle}
      />
    ))
  };

  const style = {
    position: 'relative',
  }

  return (
    <div style={style}>
      {generateTacos(tacos)}
    </div>
  );
};

export default HomePageTacos;
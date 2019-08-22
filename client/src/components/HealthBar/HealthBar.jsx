import React from 'react';
import Heart from '../Heart/Heart';

const HealthBar = (props) => {

  const renderHealthBar = (healths) => (
    healths.map((health, i) => (
      <Heart key={i} opacity={health} />
    ))
  );

  const style = {
    display: 'flex',
    margin: '10px'
  };

  return (
    <div style={style}>
      {renderHealthBar(props.healthBar)}
    </div>
  );
};

export default HealthBar;
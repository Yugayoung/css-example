import React from 'react';
import './AppXY.css';
export default function AppXY() {
  return (
    <div
      className='container'
      onPointerMove={(event) => {
        console.log(event.clientX, event.clientY);
      }}
    >
      <div className='pointer' />
    </div>
  );
}

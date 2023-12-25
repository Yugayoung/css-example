import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button
        className='button'
        onClick={() => {
          num++;
          console.log(count);
        }}
      >
        add +
      </button>
    </div>
  );
}

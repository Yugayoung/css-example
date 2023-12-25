import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <p className='number'>{count}</p>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}

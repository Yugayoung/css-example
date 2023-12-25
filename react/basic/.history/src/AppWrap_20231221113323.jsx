import React, { Children } from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar(children) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avartar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}

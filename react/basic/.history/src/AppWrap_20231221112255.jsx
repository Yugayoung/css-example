import React from 'react';
import Avatar from '../.history/src/components/Avatar_20231219115624';

export default function AppWrap() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <header style={{ backgroundColor: 'yellow' }}>
      <Avatar
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob'
        size={200}
      />
    </header>
  );
}

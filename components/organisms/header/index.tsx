import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <div>
        <Image src="/logo.svg" alt="Skillex Logo" width="124px" height="36px" />
      </div>
    </header>
  );
}

export default Header;

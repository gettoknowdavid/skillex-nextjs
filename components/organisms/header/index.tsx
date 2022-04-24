import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <div>
        <Image src="/logo.svg" alt="Skillex Logo" width="124px" height="36px" />
      </div>
      <ul>
        <li>
          <Link href="/"><a>Find passion</a></Link>
        </li>
        <li>
          <Link href="/"><a>Categories</a></Link>
        </li>
        <li>
          <Link href="/"><a>Skills</a></Link>
        </li>
        <li>
          <Link href="/"><a>Customer</a></Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

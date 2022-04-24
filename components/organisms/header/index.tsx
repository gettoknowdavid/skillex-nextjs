import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, SHAPE, SIZE } from 'baseui/button';

function Header() {
  return (
    <header>
      <div>
        <Image src="/logo.svg" alt="Skillex Logo" width="124px" height="36px" />
      </div>
      <div>
        <nav>
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
        </nav>
      </div>
      <div>
        <Link href="/"><a>Login</a></Link>
        <Button size={SIZE.compact} shape={SHAPE.pill}>Free Trial</Button>
      </div>
    </header>
  );
}

export default Header;

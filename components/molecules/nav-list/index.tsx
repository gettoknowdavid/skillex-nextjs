import React from 'react';
import Link from 'next/link';
import { StyledNav, StyledNavLink } from './styled-components';

function NavList() {
  return (
    <StyledNav>
      <Link href="/" passHref><StyledNavLink>Find passion</StyledNavLink></Link>
      <Link href="/" passHref><StyledNavLink>Categories</StyledNavLink></Link>
      <Link href="/" passHref><StyledNavLink>Skills</StyledNavLink></Link>
      <Link href="/" passHref><StyledNavLink>Customer</StyledNavLink></Link>
    </StyledNav>
  );
}

export default NavList;

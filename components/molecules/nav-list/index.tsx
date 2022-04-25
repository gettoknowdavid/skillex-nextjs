import React from 'react';
import Link from 'next/link';
import { StyledNav, StyledNavLink } from './styled-components';
import LINKS, { NavLinkType } from '../../../lib/links';

function NavList() {
  return (
    <StyledNav>
      {LINKS.map((link: NavLinkType) => (
        <Link href={link.url} passHref key={link.id}>
          <StyledNavLink>{link.name}</StyledNavLink>
        </Link>
      ))}
    </StyledNav>
  );
}

export default NavList;

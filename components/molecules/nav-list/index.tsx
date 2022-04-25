import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { StyledNav, StyledNavLink } from './styled-components';
import LINKS, { NavLinkType } from '../../../lib/links';

gsap.registerPlugin(ScrollToPlugin);

function NavList() {
  return (
    <StyledNav>
      {LINKS.map((link: NavLinkType) => (
        <StyledNavLink
          key={link.id}
          onClick={() => gsap.to(window, { duration: 2, scrollTo: { y: link.url, offsetY: 120 } })}
        >
          {link.name}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
}

export default NavList;

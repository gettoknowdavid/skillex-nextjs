import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { StyledNav, StyledNavLink } from './styled-components';
import LINKS, { NavLinkType } from '../../../lib/links';
import GlobalContext from '../../../contexts/global.context';

gsap.registerPlugin(ScrollToPlugin);

function NavList() {
  const { closeDrawer } = React.useContext(GlobalContext);

  const onClick = (url: string) => {
    closeDrawer();
    gsap.to(window, {
      duration: 1.6,
      ease: 'power3.out',
      scrollTo: { y: url, offsetY: 120 },
    });
  };

  return (
    <StyledNav>
      {LINKS.map((link: NavLinkType) => (
        <StyledNavLink key={link.id} onClick={() => onClick(link.url)}>
          {link.name}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
}

export default NavList;

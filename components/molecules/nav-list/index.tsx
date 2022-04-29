import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { StyledNav, StyledNavLink } from './styled-components';
import LINKS, { NavLinkType } from '../../../lib/links';
import GlobalContext from '../../../contexts/global.context';

gsap.registerPlugin(ScrollToPlugin);

function NavList() {
  const [id, setId] = React.useState('#find-position');
  const timeline = gsap.timeline();

  return (
    <StyledNav>
      {LINKS.map((link: NavLinkType) => (
        <GlobalContext.Consumer key={link.id}>
          {({ closeDrawer }) => (
            <StyledNavLink
              $isActive={link.url === id}
              onClick={() => {
                closeDrawer();
                setId(link.url);
                timeline.to(window, {
                  duration: 1.6,
                  ease: 'power3.out',
                  scrollTo: { y: link.url, offsetY: 80 },
                });
              }}
            >
              {link.name}
            </StyledNavLink>
          )}
        </GlobalContext.Consumer>
      ))}
    </StyledNav>
  );
}

export default NavList;

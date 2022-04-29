import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { StyledNav, StyledNavLink } from './styled-components';
import { NavLinkType } from '../../../lib/links';
import GlobalContext from '../../../contexts/global.context';

gsap.registerPlugin(ScrollToPlugin);

function NavList() {
  const [id, setId] = React.useState('#find-position');
  const timeline = gsap.timeline();

  return (
    <GlobalContext.Consumer>
      {({ closeDrawer, links }) => (
        <StyledNav>
          {links.map((link: NavLinkType) => (
            <StyledNavLink
              key={link.id}
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
          ))}
        </StyledNav>
      )}
    </GlobalContext.Consumer>
  );
}

export default NavList;

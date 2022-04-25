import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../../atoms/hamburger';
import NavList from '../../molecules/nav-list';
import NavActionButtons from '../../molecules/nav-action-buttons';
import {
  StyledActionsBlock,
  StyledHeader, StyledHeaderBlock, StyledLogoBlock,
  StyledLogoLink, StyledNavBlock,
} from './styled-components';

function Header() {
  return (
    <StyledHeader>

      <StyledHeaderBlock>

        <StyledLogoBlock>
          <Link href="/" passHref>
            <StyledLogoLink>
              <Image
                src="/logo.svg"
                alt="Skillex Logo"
                width="124px"
                height="36px"
                style={{ cursor: 'pointer' }}
              />
            </StyledLogoLink>
          </Link>
        </StyledLogoBlock>

        <StyledNavBlock>
          <NavList />
        </StyledNavBlock>

        <StyledActionsBlock>
          <NavActionButtons />
        </StyledActionsBlock>

        <Hamburger />

      </StyledHeaderBlock>

    </StyledHeader>
  );
}

export default Header;

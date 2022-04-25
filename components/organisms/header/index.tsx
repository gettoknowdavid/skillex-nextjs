import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../../atoms/hamburger';
import NavList from '../../molecules/nav-list';
import NavActionButtons from '../../molecules/nav-action-buttons';
import Logo from '../../atoms/logo';
import {
  StyledActionsBlock,
  StyledHeader, StyledHeaderBlock, StyledLogoBlock,
  StyledNavBlock,
} from './styled-components';

function Header() {
  return (
    <StyledHeader>

      <StyledHeaderBlock>

        <StyledLogoBlock>
          <Logo />
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

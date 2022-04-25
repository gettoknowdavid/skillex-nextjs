import React from 'react';
import Hamburger from '../../atoms/hamburger';
import NavList from '../../molecules/nav-list';
import Logo from '../../atoms/logo';
import {
  StyledActionsBlock,
  StyledHeader,
  StyledHeaderBlock,
  StyledLogoBlock,
  StyledNavBlock,
} from './styled-components';
import LoginButton from '../../atoms/login-button';
import FreeTrialButton from '../../atoms/free-trial-button';

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
          <LoginButton />
          <FreeTrialButton />
        </StyledActionsBlock>
        <Hamburger />
      </StyledHeaderBlock>
    </StyledHeader>
  );
}

export default Header;

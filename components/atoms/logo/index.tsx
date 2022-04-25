import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'baseui';

export const StyledLogoLink = styled('div', ({ $theme }) => ({
  maxWidth: '100%',
  display: 'inline-block',
  backgroundColor: 'transparent',
  WebkitTransition: '.3s',
  transition: '.3s',
  textDecoration: 'underline',
  [$theme.mediaQuery.small]: { maxWidth: '82px' },
  [$theme.mediaQuery.medium]: { maxWidth: '100%' },
  [$theme.mediaQuery.large]: { maxWidth: '100%' },
}));

function Logo() {
  return (
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
  );
}

export default Logo;

/* eslint-disable import/prefer-default-export */
import { styled } from 'baseui';

export const StyledHeader = styled('header', ({ $theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 90,
  width: '100%',
  display: 'block',
  backgroundColor: $theme.colors.mono100,
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  [$theme.mediaQuery.small]: { padding: '20px 24px' },
  [$theme.mediaQuery.medium]: { padding: '1.714rem 1.714rem' },
  [$theme.mediaQuery.large]: { padding: '2.375rem 5rem' },
}));

export const StyledHeaderBlock = styled('div', () => ({
  maxWidth: '1280px',
  width: '100%',
  margin: '0px auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledLogoBlock = styled('div', ({ $theme }) => ({
  [$theme.mediaQuery.small]: { minWidth: 'auto' },
  [$theme.mediaQuery.medium]: { minWidth: 'auto' },
  [$theme.mediaQuery.large]: { minWidth: '250px' },
}));

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

export const StyledNavBlock = styled('div', ({ $theme }) => ({
  justifyItems: 'flex-start',
  width: '100%',
  [$theme.mediaQuery.small]: { display: 'none' },
  [$theme.mediaQuery.medium]: { display: 'none' },
  [$theme.mediaQuery.large]: { display: 'flex' },
}));

export const StyledActionsBlock = styled('div', ({ $theme }) => ({
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  [$theme.mediaQuery.small]: { display: 'none' },
  [$theme.mediaQuery.medium]: { display: 'none' },
  [$theme.mediaQuery.large]: { display: 'flex' },
}));

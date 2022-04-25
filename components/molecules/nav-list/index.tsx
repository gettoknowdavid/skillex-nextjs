import React from 'react';
import Link from 'next/link';
import { useStyletron } from 'baseui';

function NavList() {
  const [css, theme] = useStyletron();

  const linkStyles = css({
    boxShadow: 'inset 0 0 0 0 #97c680',
    color: theme.colors.mono800,
    textDecoration: 'none',
    transitionDuration: '.3s',
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: '22px',
    [theme.mediaQuery.small]: {
      marginRight: 0,
      textAlign: 'left',
      marginBottom: '-1px',
      paddingTop: '24px',
      paddingBottom: '24px',
      borderBottom: '1px solid rgba(30,30,47,.1)',
      display: 'block',
      width: '100%',
      ':last-child': { borderBottom: '1px solid rgba(30,30,47,.0)' },
    },
    [theme.mediaQuery.medium]: {
      marginRight: 0,
      textAlign: 'left',
      display: 'block',
      marginBottom: '-1px',
      paddingTop: '24px',
      paddingBottom: '24px',
      borderBottom: '1px solid rgba(30,30,47,.1)',
      width: '100%',
      ':last-child': { borderBottom: '1px solid rgba(30,30,47,.0)' },
    },
    [theme.mediaQuery.large]: {
      marginRight: '2.5rem',
      textAlign: 'center',
      display: 'inline-block',
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderBottom: 'none',
      width: 'auto',
    },
  });

  return (

    <nav className={css({
      [theme.mediaQuery.small]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '100%',
      },
      [theme.mediaQuery.medium]: {
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      },
      [theme.mediaQuery.large]: {
        paddingTop: 0,
        display: 'block',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      },
    })}
    >
      <Link href="/"><a className={linkStyles}>Find passion</a></Link>
      <Link href="/"><a className={linkStyles}>Categories</a></Link>
      <Link href="/"><a className={linkStyles}>Skills</a></Link>
      <Link href="/"><a className={linkStyles}>Customer</a></Link>
    </nav>
  );
}

export default NavList;

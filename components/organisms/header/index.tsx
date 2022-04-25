import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStyletron } from 'baseui';
import Hamburger from '../../atoms/hamburger';
import NavList from '../../molecules/nav-list';
import NavActionButtons from '../../molecules/nav-action-buttons';

function Header() {
  const [css, theme] = useStyletron();

  return (
    <header className={css({
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 90,
      width: '100%',
      display: 'block',
      backgroundColor: theme.colors.mono100,
      transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
      [theme.mediaQuery.small]: { padding: '20px 24px' },
      [theme.mediaQuery.medium]: { padding: '1.714rem 1.714rem' },
      [theme.mediaQuery.large]: { padding: '2.375rem 5rem' },
    })}
    >
      <div className={css({
        maxWidth: '1280px',
        width: '100%',
        margin: '0px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
      >
        <div className={css({
          [theme.mediaQuery.small]: { minWidth: 'auto' },
          [theme.mediaQuery.medium]: { minWidth: 'auto' },
          [theme.mediaQuery.large]: { minWidth: '250px' },
        })}
        >
          <Link href="/">
            <a className={css({
              maxWidth: '100%',
              display: 'inline-block',
              backgroundColor: 'transparent',
              WebkitTransition: '.3s',
              transition: '.3s',
              textDecoration: 'underline',
              [theme.mediaQuery.small]: { maxWidth: '82px' },
              [theme.mediaQuery.medium]: { maxWidth: '100%' },
              [theme.mediaQuery.large]: { maxWidth: '100%' },
            })}
            >
              <Image
                src="/logo.svg"
                alt="Skillex Logo"
                width="124px"
                height="36px"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Link>
        </div>
        <div className={css({
          justifyItems: 'flex-start',
          width: '100%',
          [theme.mediaQuery.small]: { display: 'none' },
          [theme.mediaQuery.medium]: { display: 'none' },
          [theme.mediaQuery.large]: { display: 'flex' },
        })}
        >
          <NavList />
        </div>
        <div className={css({
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          [theme.mediaQuery.small]: { display: 'none' },
          [theme.mediaQuery.medium]: { display: 'none' },
          [theme.mediaQuery.large]: { display: 'flex' },
        })}
        >
          <NavActionButtons />
        </div>
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;

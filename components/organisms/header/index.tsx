import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import Hamburger from '../../atoms/hamburger';

function Header() {
  const [css, theme] = useStyletron();

  const linkStyles = css({
    display: 'inline-block',
    boxShadow: 'inset 0 0 0 0 #97c680',
    color: theme.colors.mono800,
    textDecoration: 'none',
    transitionDuration: '.3s',
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: '22px',
    [theme.mediaQuery.small]: { marginRight: 0, textAlign: 'left' },
    [theme.mediaQuery.medium]: { marginRight: 0, textAlign: 'left' },
    [theme.mediaQuery.large]: { marginRight: '2.5rem', textAlign: 'center' },
  });

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
          [theme.mediaQuery.small]: { display: 'none' },
          [theme.mediaQuery.medium]: { display: 'none' },
          [theme.mediaQuery.large]: { display: 'block' },
        })}
        >
          <nav style={{ display: 'block' }}>
            <Link href="/"><a className={linkStyles}>Find passion</a></Link>
            <Link href="/"><a className={linkStyles}>Categories</a></Link>
            <Link href="/"><a className={linkStyles}>Skills</a></Link>
            <Link href="/"><a className={linkStyles}>Customer</a></Link>
          </nav>
        </div>
        <div className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          // flex: 1,
          // flexBasis: '0%',
          // flexGrow: 1,
          // flexShrink: 1,
          fontSize: '1rem',
          [theme.mediaQuery.small]: { display: 'none' },
          [theme.mediaQuery.medium]: { display: 'none' },
          [theme.mediaQuery.large]: { display: 'block' },
        })}
        >
          <Link href="/">
            <a className={css({
              display: 'inline-block',
              boxShadow: 'inset 0 0 0 0 #97c680',
              color: theme.colors.mono800,
              [theme.mediaQuery.small]: { marginRight: 0, textAlign: 'left' },
              [theme.mediaQuery.medium]: { marginRight: 0, textAlign: 'left' },
              [theme.mediaQuery.large]: { marginRight: '2.5rem', textAlign: 'center' },
            })}
            >
              Login
            </a>
          </Link>
          <Button
            size={SIZE.compact}
            shape={SHAPE.pill}
            overrides={{
              BaseButton: {
                style: ({
                  minWidth: '10rem',
                  paddingTop: '0.8rem',
                  paddingRight: '1.875rem',
                  paddingBottom: '0.8rem',
                  paddingLeft: '1.875rem',
                  // boxShadow: 'inset 0 45px 0 0 #1e1e2f',
                  textAlign: 'center',
                  fontSize: '1rem',
                  ':hover': { backgroundColor: '#97c680' },
                }),
              },
            }}
          >
            Free Trial
          </Button>
        </div>
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import Link from 'next/link';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';

function NavActionButtons() {
  const [css, theme] = useStyletron();

  return (
    <>
      <Link href="/">
        <a className={css({
          display: 'inline-block',
          boxShadow: 'inset 0 0 0 0 #97c680',
          color: theme.colors.primaryA,
          fontSize: '1rem',
          lineHeight: '22px',
          [theme.mediaQuery.small]: {
            marginRight: '16px',
            textAlign: 'center',
            border: '1px solid rgba(30,30,47,.2)',
            backgroundColor: 'transparent',
            paddingTop: '10px',
            paddingRight: '30px',
            paddingBottom: '10px',
            paddingLeft: '30px',
            borderRadius: '100px',
            width: '100%',
            minWidth: 'auto',
          },
          [theme.mediaQuery.medium]: {
            marginRight: '16px',
            textAlign: 'center',
            border: '1px solid rgba(30,30,47,.2)',
            backgroundColor: 'transparent',
            paddingTop: '10px',
            paddingRight: '30px',
            paddingBottom: '10px',
            paddingLeft: '30px',
            borderRadius: '100px',
            width: 'auto',
            minWidth: '160px',
          },
          [theme.mediaQuery.large]: {
            marginRight: '2.5rem',
            textAlign: 'center',
            border: 'none',
            backgroundColor: 'transparent',
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            borderRadius: 0,
            width: 'auto',
            minWidth: 'auto',
          },
        })}
        >
          Login
        </a>
      </Link>
      <Button
        size={SIZE.compact}
        shape={SHAPE.pill}
        type="button"
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              minWidth: '10rem',
              paddingTop: '11px',
              paddingRight: '30px',
              paddingBottom: '11px',
              paddingLeft: '30px',
              // boxShadow: 'inset 0 45px 0 0 #1e1e2f',
              textAlign: 'center',
              fontSize: '1rem',
              lineHeight: '22px',
              ':hover': { backgroundColor: '#97c680' },
              [$theme.mediaQuery.small]: { minWidth: 'auto', width: '100%' },
              [$theme.mediaQuery.medium]: { minWidth: '160px', width: 'auto' },
              [$theme.mediaQuery.large]: { minWidth: '160px', width: 'auto' },
            }),
          },
        }}
      >
        Free Trial
      </Button>
    </>
  );
}

export default NavActionButtons;

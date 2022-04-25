import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import GlobalContext from '../../../contexts/global.context';

function Hamburger() {
  const [css, theme] = useStyletron();

  const [menuTl] = React.useState(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    menuTl.to('.line-one', { duration: 0.2, y: 0, rotation: 45 })
      .to('.line-two', { duration: 0.2, y: 0, rotation: -45 }, 0).reverse();
  }, [menuTl]);

  const onclick = () => menuTl.reversed(!menuTl.reversed());

  return (
    <GlobalContext.Consumer>
      {({ toggleDrawer }) => (
        <div
          onClick={() => {
            onclick();
            toggleDrawer();
          }}
          role="button"
          aria-label="Menu Button"
          tabIndex={0}
          onKeyDown={() => {
            onclick();
            toggleDrawer();
          }}
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '24px',
            position: 'relative',
            width: '32px',
            height: '32px',
            padding: 0,
            backgroundColor: theme.colors.primaryA,
            transitionProperty: 'all',
            transitionDuration: '.2s',
            cursor: 'pointer',
            [theme.mediaQuery.small]: { display: 'flex' },
            [theme.mediaQuery.medium]: { display: 'flex' },
            [theme.mediaQuery.large]: { display: 'none' },
          })}
        >
          <div
            className="line-one"
            style={{
              transform: 'translate3d(0px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              position: 'absolute',
              width: '16px',
              height: '2px',
              backgroundColor: theme.colors.mono100,
            }}
          />
          <div
            className="line-two"
            style={{
              transform: 'translate3d(0px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              position: 'absolute',
              width: '16px',
              height: '2px',
              backgroundColor: '#fff',
            }}
          />
        </div>
      )}
    </GlobalContext.Consumer>
  );
}

export default Hamburger;

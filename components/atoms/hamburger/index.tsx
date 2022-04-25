import React from 'react';
import { gsap } from 'gsap';
import GlobalContext from '../../../contexts/global.context';
import { StyledHamburgerBlock, StyledLineOne, StyledLineTwo } from './styled-components';

function Hamburger() {
  const [menuTl] = React.useState(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    menuTl.to('.line-one', { duration: 0.2, y: 0, rotation: 45 })
      .to('.line-two', { duration: 0.2, y: 0, rotation: -45 }, 0).reverse();
  }, [menuTl]);

  const animate = () => menuTl.reversed(!menuTl.reversed());

  return (
    <GlobalContext.Consumer>
      {({ toggleDrawer }) => (
        <StyledHamburgerBlock
          role="button"
          aria-label="Menu Button"
          tabIndex={0}
          onClick={() => {
            animate();
            toggleDrawer();
          }}
          onKeyDown={() => {
            animate();
            toggleDrawer();
          }}
        >
          <StyledLineOne className="line-one" />

          <StyledLineTwo className="line-two" />
          s
        </StyledHamburgerBlock>
      )}
    </GlobalContext.Consumer>
  );
}

export default Hamburger;

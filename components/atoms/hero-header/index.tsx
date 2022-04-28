import React from 'react';
import { useStyletron } from 'baseui';

function HeroHeader() {
  const [css, theme] = useStyletron();
  const dotStyle = { fontFamily: '"Arial", sans-serif' };
  return (
    <h1 className={css({
      marginTop: 0,
      marginBottom: '90px',
      fontSize: '76px',
      lineHeight: 1,
      fontWeight: 700,
      opacity: 1,
      transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
      transformStyle: 'preserve-3d',
      [theme.mediaQuery.small]: { fontSize: '54px' },
      [theme.mediaQuery.medium]: { fontSize: '76px' },
      [theme.mediaQuery.large]: { fontSize: '76px' },
    })}
    >
      Watch
      <span style={dotStyle}>
        .
      </span>
      <br />
      Learn
      <span style={dotStyle}>.</span>
      <br />
      Grow
      <span style={dotStyle}>.</span>
      <br />
    </h1>
  );
}

export default HeroHeader;

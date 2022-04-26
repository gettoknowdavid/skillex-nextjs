import React from 'react';
import { useStyletron } from 'baseui';

type SectionType = {
    children: React.ReactNode,
    paddingTop: string[],
    paddingBottom: string[],
};

function Section({ children, paddingBottom, paddingTop }: SectionType) {
  const [css, theme] = useStyletron();

  return (
    <section className={css({
      [theme.mediaQuery.small]: {
        paddingTop: paddingTop[0],
        paddingRight: '24px',
        paddingBottom: paddingBottom[0],
        paddingLeft: '24px',
      },
      [theme.mediaQuery.medium]: {
        paddingTop: paddingTop[1],
        paddingRight: '1.714rem',
        paddingBottom: paddingBottom[1],
        paddingLeft: '1.714rem',
      },
      [theme.mediaQuery.large]: {
        paddingTop: paddingTop[2],
        paddingRight: '5rem',
        paddingBottom: paddingBottom[2],
        paddingLeft: '5rem',
      },
    })}
    >
      {children}
    </section>
  );
}

export default Section;

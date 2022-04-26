import React from 'react';
import { useStyletron } from 'baseui';

type SectionType = {
    id: string,
    children: React.ReactNode,
    paddingTop?: any,
    paddingBottom?: any,
};

function Section(props: SectionType) {
  const {
    id, children, paddingBottom, paddingTop,
  } = props;

  const [css, theme] = useStyletron();

  return (
    <section
      id={id}
      className={css({
        minHeight: '100vh',
        [theme.mediaQuery.small]: {
          paddingTop: paddingTop.length !== 0 ? paddingTop[0] : paddingTop,
          paddingRight: '24px',
          paddingBottom: paddingBottom?.length !== 0 ? paddingBottom[0] : paddingBottom,
          paddingLeft: '24px',
        },
        [theme.mediaQuery.medium]: {
          paddingTop: paddingTop.length !== 0 ? paddingTop[1] : paddingTop,
          paddingRight: '1.714rem',
          paddingBottom: paddingBottom?.length !== 0 ? paddingBottom[1] : paddingBottom,
          paddingLeft: '1.714rem',
        },
        [theme.mediaQuery.large]: {
          paddingTop: paddingTop.length !== 0 ? paddingTop[2] : paddingTop,
          paddingRight: '5rem',
          paddingBottom: paddingBottom?.length !== 0 ? paddingBottom[2] : paddingBottom,
          paddingLeft: '5rem',
        },
      })}
    >
      {children}
    </section>
  );
}

Section.defaultProps = {
  paddingTop: [] || '',
  paddingBottom: [] || '',
};

export default Section;

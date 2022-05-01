import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '../components/layout';
import Section from '../components/atoms/section';
import FindPositionSection from '../content/find-position.section';
import CategoriesList from '../components/molecules/categories-list';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = function () {
  const [css, theme] = useStyletron();

  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.category-flex',
        start: '-340px top',
        end: '-120px end',
        fastScrollEnd: true,
        onEnter: () => tl.play(),
        onEnterBack: () => tl.reverse(),
        onLeaveBack: () => tl.reverse(),
      },
    });

    tl.fromTo(
      ['.category-flex0', '.category-flex3'],
      { y: 0 },
      { y: -124, duration: 0.6 },
    ).fromTo(
      '.category-flex1',
      { y: 0 },
      { y: -78, duration: 0.6 },
      0,
    ).paused();
  });

  return (
    <>
      <FindPositionSection />
      <Section id="categories">
        <div>
          <h2 className={css({
            marginTop: 0,
            lineHeight: '1.2em',
            fontWeight: '700',
            textAlign: 'center',
            [theme.mediaQuery.small]: { fontSize: '28px', marginBottom: '40px' },
            [theme.mediaQuery.medium]: { fontSize: '40px', marginBottom: '48px' },
            [theme.mediaQuery.large]: { fontSize: '40px', marginBottom: '48px' },
          })}
          >
            Unlimited access to 100+ instructors
            <span style={{ fontFamily: '"Arial", sans-serif', color: '#97c680' }}>.</span>
          </h2>
        </div>
        <CategoriesList />
      </Section>
      <Section id="skills" style={{ minHeight: '100vh' }}><HeadingXXLarge>Skills</HeadingXXLarge></Section>
      <Section id="customer" style={{ minHeight: '100vh' }}><HeadingXXLarge>Customer</HeadingXXLarge></Section>
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default Home;

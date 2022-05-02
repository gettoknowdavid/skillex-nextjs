import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Tab, Tabs } from 'baseui/tabs-motion';
import Section from '../components/atoms/section';
import { CATEGORIES } from '../lib/category-type';
import CategoryCard from '../components/molecules/category-card';

gsap.registerPlugin(ScrollTrigger);

function CategoriesSection() {
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
      { y: 124, duration: 0.6 },
    ).fromTo(
      '.category-flex1',
      { y: 0 },
      { y: 78, duration: 0.6 },
      0,
    ).paused();
  });

  const tabOverrides = {
    Tab: {
      style: ({
        paddingTop: '6px',
        paddingRight: '2px',
        paddingBottom: '6px',
        paddingLeft: '2px',
        marginRight: '14px',
        marginLeft: '14px',
        fontWeight: 700,
      }),
    },
  };

  return (
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
      <Tabs overrides={{
        TabList: { style: ({ justifyContent: 'center' }) },
        TabBorder: { style: ({ backgroundColor: 'white' }) },
        TabHighlight: { style: ({ height: '1px' }) },

      }}
      >
        <Tab overrides={tabOverrides} title="All categories" />
        <Tab overrides={tabOverrides} title="Entertainment" />
        <Tab overrides={tabOverrides} title="Lifestyle" />
        <Tab overrides={tabOverrides} title="Writing" />
        <Tab overrides={tabOverrides} title="Business" />
        <Tab overrides={tabOverrides} title="Food" />
      </Tabs>
      <FlexGrid
        className="category-flex"
        flexGridColumnCount={[1, 1, 4, 4]}
        flexGridColumnGap={['0px', '0px', 'scale900', 'scale900']}
        alignItems="flex-start"
        maxHeight="720px"
        padding={['40px 0px', '40px 0px', '48px 0px', '48px 0px']}
      >
        {CATEGORIES.map((category, index) => (
          <FlexGridItem className={`category-flex${index}`} key={category.id}>
            <CategoryCard category={category} index={index} />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </Section>
  );
}

export default CategoriesSection;

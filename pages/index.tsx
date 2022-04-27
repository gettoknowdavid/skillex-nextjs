import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
import Layout from '../components/layout';
import Section from '../components/atoms/section';
import EmailInput from '../components/molecules/email-input';
import HeroHeader from '../components/atoms/hero-header';
import FindPositionSection from '../content/find-position.section';

const Home: NextPage = function () {
  const [css, theme] = useStyletron();

  return (
    <>
      <FindPositionSection />
      <Section id="categories" style={{ minHeight: '100vh' }}><HeadingXXLarge>Categories</HeadingXXLarge></Section>
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

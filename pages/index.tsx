import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import Layout from '../components/layout';
import Section from '../components/atoms/section';

const Home: NextPage = function () {
  return (
    <>
      <Section id="find-position" paddingTop={['12px', '300px', '120px']} style={{ minHeight: '100vh' }}>
        <HeadingXXLarge>Find Position</HeadingXXLarge>
      </Section>
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

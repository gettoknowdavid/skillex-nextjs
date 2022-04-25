import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import Layout from '../components/layout';

const Home: NextPage = function () {
  return (
    <>
      <section id="find-position" style={{ paddingTop: '120px', minHeight: '100vh' }}><HeadingXXLarge>Find Position</HeadingXXLarge></section>
      <section id="categories" style={{ minHeight: '100vh' }}><HeadingXXLarge>Categories</HeadingXXLarge></section>
      <section id="skills" style={{ minHeight: '100vh' }}><HeadingXXLarge>Skills</HeadingXXLarge></section>
      <section id="customer" style={{ minHeight: '100vh' }}><HeadingXXLarge>Customer</HeadingXXLarge></section>
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

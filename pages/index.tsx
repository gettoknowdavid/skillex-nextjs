import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingLarge } from 'baseui/typography';
import Layout from '../components/layout';

const Home: NextPage = function () {
  return (
    <div>
      <HeadingLarge>Welcome Home</HeadingLarge>
    </div>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default Home;

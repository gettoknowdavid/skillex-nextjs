import React from 'react';
import type { NextPage } from 'next';
import { HeadingLarge } from 'baseui/typography';

const Home: NextPage = function () {
  return (
    <div>
      <HeadingLarge>Welcome Home</HeadingLarge>
    </div>
  );
};

export default Home;

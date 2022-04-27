import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
import Link from 'next/link';
import { Input } from 'baseui/input';
import Layout from '../components/layout';
import Section from '../components/atoms/section';
import EmailInput from '../components/molecules/email-input';

const Home: NextPage = function () {
  const [css, theme] = useStyletron();

  return (
    <>
      <Section id="find-position" paddingTop={['100px', '120px', '120px']}>
        <div className={css({
          position: 'relative',
        })}
        >
          <div className={css({
            display: 'flex',
            WebkitBoxPack: 'justify',
            justifyContent: 'space-between',
            WebkitBoxAlign: 'stretch',
            alignItems: 'stretch',
          })}
          >
            <div className={css({
              paddingBottom: '56px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            })}
            >
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
                <span className="dot">.</span>
                <br />
                Learn
                <span className="dot">.</span>
                <br />
                Grow
                <span className="dot">.</span>
                <br />
              </h1>
              <form
                id="email-form"
                name="email-form"
                aria-label="Email Form"
                method="get"
              >
                <EmailInput />

              </form>
            </div>
          </div>
        </div>
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

import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
import Link from 'next/link';
import { Input } from 'baseui/input';
import Layout from '../components/layout';
import Section from '../components/atoms/section';

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
                <Input
                  id="find"
                  type="text"
                  placeholder="Find your passion"
                  maxLength={6}
                  name="Find"
                  required
                  endEnhancer={() => (
                    <Link href="/">
                      <a className={css({
                        fontWeight: 700,
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        zIndex: '1',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(151, 198, 128)',
                        color: 'rgb(30, 30, 47)',
                        transitionProperty: 'all',
                        transitionDuration: theme.animation.timing300,
                        transitionTimingFunction: 'ease',
                        cursor: 'pointer',
                        paddingTop: '9px',
                        paddingRight: '15px',
                        paddingBottom: '9px',
                        paddingLeft: '15px',
                        ':hover': { boxShadow: 'rgb(254, 186, 136) 0px -120px 0px 0px inset' },
                        [theme.mediaQuery.small]: { width: '86px', fontSize: '24px' },
                        [theme.mediaQuery.medium]: { width: '120px', fontSize: '34px' },
                        [theme.mediaQuery.large]: { width: '120px', fontSize: '34px' },
                      })}
                      >
                        Go
                      </a>
                    </Link>
                  )}
                  overrides={{
                    Root: {
                      style: ({
                        position: 'relative',
                        paddingRight: 0,
                        zIndex: 0,
                        width: '100%',
                        borderTopWidth: '0px',
                        borderRightWidth: '0px',
                        borderBottomWidth: '0px',
                        borderLeftWidth: '0px',
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 46px 50px 0px',
                        transitionProperty: 'all',
                        transitionDuration: theme.animation.timing700,
                        ':focus-within': {
                          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 46px 50px 0px',
                          borderTopWidth: '0px',
                          borderRightWidth: '0px',
                          borderBottomWidth: '0px',
                          borderLeftWidth: '0px',
                        },
                      }),
                    },
                    Input: {
                      style: ({ $theme }) => ({
                        backgroundColor: 'white',
                        paddingTop: 0,
                        paddingRight: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        [$theme.mediaQuery.small]: { fontSize: '16px' },
                        [$theme.mediaQuery.medium]: { fontSize: '20px' },
                        [$theme.mediaQuery.large]: { fontSize: '20px' },
                      }),
                    },
                    InputContainer: {
                      style: ({ $theme }) => ({
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        backgroundColor: 'white',
                        transitionProperty: 'all',
                        transitionDuration: theme.animation.timing700,
                        borderTopWidth: '1px',
                        borderRightWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '1px',
                        borderTopStyle: 'solid',
                        borderRightStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderLeftStyle: 'solid',
                        borderTopColor: 'white',
                        borderRightColor: 'white',
                        borderBottomColor: 'white',
                        borderLeftColor: 'white',
                        ':focus-within': {
                          borderTopWidth: '1px',
                          borderRightWidth: '1px',
                          borderBottomWidth: '1px',
                          borderLeftWidth: '1px',
                          borderTopStyle: 'solid',
                          borderRightStyle: 'solid',
                          borderBottomStyle: 'solid',
                          borderLeftStyle: 'solid',
                          borderTopColor: 'rgb(151, 198, 128)',
                          borderRightColor: 'rgb(151, 198, 128)',
                          borderBottomColor: 'rgb(151, 198, 128)',
                          borderLeftColor: 'rgb(151, 198, 128)',
                        },

                        [$theme.mediaQuery.small]: {
                          fontSize: '16px',
                          paddingRight: '32px',
                          paddingLeft: '32px',
                          height: '86px',
                          width: 'auto',
                        },
                        [$theme.mediaQuery.medium]: {
                          fontSize: '20px',
                          paddingRight: '12px',
                          paddingLeft: '50px',
                          height: '120px',
                          width: '450px',
                        },
                        [$theme.mediaQuery.large]: {
                          fontSize: '20px',
                          paddingRight: '12px',
                          paddingLeft: '50px',
                          height: '120px',
                          width: '450px',
                        },
                      }),
                    },
                  }}
                />

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

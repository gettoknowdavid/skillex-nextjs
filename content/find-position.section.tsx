import React from 'react';
import { useStyletron } from 'baseui';
import Image from 'next/image';
import Section from '../components/atoms/section';
import HeroHeader from '../components/atoms/hero-header';
import EmailInput from '../components/molecules/email-input';
import { HeroPerson, HeroPersonContainer, HeroPersonsDiv } from './styled-components';

function FindPositionSection() {
  const [css, theme] = useStyletron();

  return (
    <Section id="find-position" paddingTop={['100px', '120px', '120px']}>
      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          WebkitBoxPack: 'justify',
          justifyContent: 'space-between',
          WebkitBoxAlign: 'stretch',
          alignItems: 'stretch',
        }}
        >
          <div style={{
            paddingBottom: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
          >
            <HeroHeader />
            <form
              id="email-form"
              name="email-form"
              aria-label="Email Form"
              method="get"
            >
              <EmailInput />
            </form>
          </div>
          <div style={{ flex: 1 }}>
            <HeroPersonsDiv>
              <HeroPerson $width="58%">
                <HeroPersonContainer>
                  <Image
                    src="/hero_person-1.jpg"
                    alt="Woman smiling folding hands"
                    layout="fill"
                    objectFit="cover"
                    height="115%"
                  />
                </HeroPersonContainer>
              </HeroPerson>
              <HeroPerson>
                <HeroPersonContainer>
                  <Image
                    src="/hero_person-2.jpg"
                    alt="Woman smiling folding hands"
                    layout="fill"
                    objectFit="cover"
                    height="115%"
                  />
                </HeroPersonContainer>
              </HeroPerson>
              <HeroPerson>
                <HeroPersonContainer>
                  <Image
                    src="/hero_person-3.jpg"
                    alt="Woman smiling folding hands"
                    layout="fill"
                    objectFit="cover"
                    height="115%"
                  />
                </HeroPersonContainer>
              </HeroPerson>
            </HeroPersonsDiv>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FindPositionSection;

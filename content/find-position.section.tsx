import React from 'react';
import { useStyletron } from 'baseui';
import Section from '../components/atoms/section';
import HeroHeader from '../components/atoms/hero-header';
import EmailInput from '../components/molecules/email-input';
import { HeroPersonsDiv } from './styled-components';
import HeroPersonCard from '../components/molecules/hero-person-card';

export type HeroPersonType = {
    id: number,
    title: string,
    numberOfTopics: number,
    imageUrl: string,
    imageAlt: string,
}

const HERO_PERSONS: HeroPersonType[] = [
  {
    id: 1,
    title: 'Writing Course',
    imageUrl: '/hero_person-1.jpg',
    imageAlt: '',
    numberOfTopics: 100,
  },
  {
    id: 2,
    title: 'Writing Course',
    imageUrl: '/hero_person-2.jpg',
    imageAlt: '',
    numberOfTopics: 100,
  },
  {
    id: 3,
    title: 'Business Course',
    imageUrl: '/hero_person-3.jpg',
    imageAlt: '',
    numberOfTopics: 100,
  },
];

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
              {HERO_PERSONS.map((person) => (
                <HeroPersonCard
                  key={person.id}
                  person={person}
                />
              ))}
            </HeroPersonsDiv>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FindPositionSection;

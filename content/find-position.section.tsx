import React from 'react';
import Section from '../components/atoms/section';
import HeroHeader from '../components/atoms/hero-header';
import EmailInput from '../components/molecules/email-input';

function FindPositionSection() {
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
        </div>
      </div>
    </Section>
  );
}

export default FindPositionSection;

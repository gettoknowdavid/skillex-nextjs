import React from 'react';
import { useStyletron } from 'baseui';
import Image from 'next/image';
import Section from '../components/atoms/section';
import HeroHeader from '../components/atoms/hero-header';
import EmailInput from '../components/molecules/email-input';

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
            <div className={css({
              opacity: '1',
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              position: 'relative',
              zIndex: '0',
              display: 'flex',
              height: '590px',
              marginRight: '-20px',
              marginLeft: '-85px',
              WebkitBoxPack: 'end',
              WebkitJustifyContent: 'flex-end',
              MsFlexPack: 'end',
              justifyContent: 'flex-end',
            })}
            >
              <div className={css({
                position: 'relative',
                overflow: 'hidden',
                width: '21%',
                paddingRight: '20px',
                paddingLeft: '20px',
                borderRadius: '20px',
                cursor: 'pointer',
              })}
              >
                <div className={css({
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                })}
                >
                  <Image
                    src="/hero_person-1.jpg"
                    alt="Woman smiling folding hands"
                    layout="fill"
                    objectFit="cover"
                    height="115%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FindPositionSection;

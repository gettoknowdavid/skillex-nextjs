import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { HeroPerson, HeroPersonContainer } from './styled-components';
import { HeroPersonType } from '../../../lib/hero-persons';

function HeroPersonCard(props: {person: HeroPersonType}) {
  const { person } = props;

  const timeline = gsap.timeline();

  React.useEffect(() => {
    if (person.id === 1) {
      timeline.set(`.person${person.id}`, { width: '58%' });
    }
  });

  const onMouseEnter = ({ currentTarget }) => {
    if (person.id) {
      timeline.to(currentTarget, { width: '58%' });
    } else {
      timeline.to('.person', { width: '21%' });
    }
  };

  const onMouseLeave = ({ currentTarget }) => {
    if (person.id === 1) {
      timeline.to(currentTarget, { width: '58%' });
    } else {
      timeline.to(currentTarget, { width: '21%' });
    }
  };

  return (
    <HeroPerson
      className={`person person${person.id}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HeroPersonContainer>
        <Image
          src={person.imageUrl}
          alt={person.imageAlt}
          layout="fill"
          objectFit="cover"
          height="115%"
        />
      </HeroPersonContainer>
    </HeroPerson>
  );
}

HeroPersonCard.propTypes = {};

export default HeroPersonCard;

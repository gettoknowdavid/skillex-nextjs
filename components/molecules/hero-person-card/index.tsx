import React from 'react';
import Image from 'next/image';
import { HeroPerson, HeroPersonContainer } from './styled-components';
import { HeroPersonType } from '../../../content/find-position.section';

function HeroPersonCard(props: {person: HeroPersonType}) {
  const { person } = props;

  return (
    <HeroPerson $width="58%">
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

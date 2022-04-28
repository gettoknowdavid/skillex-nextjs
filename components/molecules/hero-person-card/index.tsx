import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { HeroPerson, HeroPersonContainer } from './styled-components';
import { HeroPersonType } from '../../../lib/hero-persons';

function HeroPersonCard(props: { index: number, person: HeroPersonType }) {
  const { index, person } = props;
  const list = [0, 1, 2];
  const timeline = gsap.timeline();

  // React.useEffect(() => {
  //   timeline.to('.person0', { width: '58%' })
  //     .to(['.person1', '.person2'], { width: '21%' }, 0);
  // });

  const targets = list.filter((n) => n !== index);

  const onMouseEnter = () => {
    gsap.to(`.person${index}`, { width: '58%' });
    gsap.to([`.person${targets[0]}`, `.person${targets[1]}`], { width: '21%' });
  };

  const onMouseLeave = () => {
    gsap.to('.person0', { width: '58%' });
    gsap.to(['.person1', '.person2'], { width: '21%' });
  };

  return (
    <HeroPerson
      className={`person${index}`}
      style={{ width: index === 0 ? '58%' : '21%' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HeroPersonContainer>
        <Image
          src={person.imageUrl}
          alt={person.imageAlt}
          layout="fill"
          objectFit="cover"
          priority={index === person.id}
        />
      </HeroPersonContainer>
    </HeroPerson>
  );
}

HeroPersonCard.propTypes = {};

export default HeroPersonCard;

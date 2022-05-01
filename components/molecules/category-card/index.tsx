import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { CategoryType } from '../../../lib/category-type';

function CategoryCard({ category, index }: { category: CategoryType, index: number }) {
  const onMouseEnter = (e: any) => {
    gsap.to(e.currentTarget, { color: '#97c680' });
    gsap.to(`.category-flex${index}-arrow`, { y: 0 });
  };

  const onMouseLeave = (e: any) => {
    gsap.to(e.currentTarget, { color: 'black' });
    gsap.to(`.category-flex${index}-arrow`, { y: -60 });
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
    >
      <div
        className={`category-flex${index}-arrow`}
        style={{
          borderRadius: '50%',
          height: '32px',
          width: '32px',
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 2,
          right: '12px',
          top: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate3d(0px, -60px, 0px)',

        }}
      >
        <Image src="/up-right-arrow.png" alt="Up right arrow" height="16px" width="16px" />
      </div>
      <img src={`/${category.imageUrl}`} alt={category.name} style={{ width: '100%', borderRadius: '20px' }} />
      <h3 style={{ fontWeight: 800, marginTop: '10px', marginBottom: '4px' }}>{category.name}</h3>
      <p style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>{category.duration}</p>
    </div>
  );
}

export default CategoryCard;

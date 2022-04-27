import { styled } from 'baseui';

export const HeroPerson = styled('div', (props:{$width?:string}) => ({
  position: 'relative',
  overflow: 'hidden',
  width: props.$width ?? '21%',
  paddingRight: '20px',
  paddingLeft: '20px',
  borderRadius: '20px',
  cursor: 'pointer',
}));

export const HeroPersonContainer = styled('div', () => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
}));

import { styled } from 'baseui';

export const HeroPersonsDiv = styled('div', () => ({
  opacity: '1',
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  position: 'relative',
  zIndex: 0,
  display: 'flex',
  height: '590px',
  marginRight: '-20px',
  marginLeft: '-85px',
  WebkitBoxPack: 'end',
  WebkitJustifyContent: 'flex-end',
  MsFlexPack: 'end',
  justifyContent: 'flex-end',
}));

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

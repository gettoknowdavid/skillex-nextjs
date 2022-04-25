export type NavLinkType = {
    id: number,
    name: string,
    url: string,
}

const LINKS: NavLinkType[] = [
  { id: 0, name: 'Find position', url: '#find-position' },
  { id: 1, name: 'Categories', url: '#categories' },
  { id: 2, name: 'Skills', url: '#skills' },
  { id: 3, name: 'Customer', url: '#customer' },
];

export default LINKS;

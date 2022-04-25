import React from 'react';

const GlobalContext = React.createContext({
  drawerOpen: false,
  toggleDrawer: () => {},
  closeDrawer: () => {},
});

export default GlobalContext;

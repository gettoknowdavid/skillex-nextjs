import React from 'react';
import Header from '../organisms/header';
import GlobalContext, { GlobalType } from '../../contexts/global.context';
import Drawer from '../organisms/drawer';
import LINKS from '../../lib/links';

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const globalValue: GlobalType = React.useMemo<GlobalType>(() => ({
    drawerOpen: isOpen,
    toggleDrawer,
    closeDrawer: () => setIsOpen(false),
    links: LINKS,
  }), [isOpen, toggleDrawer]);

  return (
    <GlobalContext.Provider value={globalValue}>
      <Header />
      <Drawer />
      <main>
        {children}
      </main>
    </GlobalContext.Provider>
  );
}

export default Layout;

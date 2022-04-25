import React from 'react';
import { ANCHOR, Drawer as BaseDrawer, SIZE } from 'baseui/drawer';
import GlobalContext from '../../../contexts/global.context';

function Drawer() {
  const { drawerOpen, closeDrawer } = React.useContext(GlobalContext);

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={closeDrawer}
      autoFocus
      anchor={ANCHOR.top}
      size={SIZE.full}
      overrides={{
        Root: { style: () => ({ zIndex: 80 }) },
        DrawerBody: { style: () => ({ display: 'flex', justifyContent: 'center' }) },
        DrawerContainer: { style: () => ({ display: 'flex', alignItems: 'center' }) },
      }}
    >
      s
    </BaseDrawer>
  );
}

export default Drawer;

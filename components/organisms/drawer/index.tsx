import React from 'react';
import { ANCHOR, Drawer as BaseDrawer, SIZE } from 'baseui/drawer';
import GlobalContext from '../../../contexts/global.context';
import NavList from '../../molecules/nav-list';

function Drawer() {
  const { drawerOpen, closeDrawer } = React.useContext(GlobalContext);
  // const [css, theme] = useStyletron();

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={closeDrawer}
      autoFocus
      anchor={ANCHOR.top}
      size={SIZE.full}
      overrides={{
        Root: { style: () => ({ zIndex: 80 }) },
        DrawerBody: {
          style: ({
            marginTop: 0, marginRight: 0, marginLeft: 0, paddingTop: '100px',
          }),
        },
        DrawerContainer: {
          style: ({ paddingRight: '24px', paddingLeft: '24px' }),
        },
      }}
    >
      <NavList />
    </BaseDrawer>
  );
}

export default Drawer;

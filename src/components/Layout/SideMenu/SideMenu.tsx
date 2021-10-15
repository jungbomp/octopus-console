import React from 'react';
import Classnames from 'classnames';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import type { MenuItemContext } from 'src/types';

import MenuItem from './MenuItem';

import type { SideMenuProps } from './SideMenu.types';
import styles from './SideMenu.scss';

const SideMenu: React.FC<SideMenuProps> = ({ className, open = false, menuItems, closeSideMenu = () => {} }) => {
  return (
    <Drawer
      className={Classnames(
        styles.sideMenu,
        {
          [styles.closed]: !open,
        },
        className,
      )}
      variant='permanent'
      open={open}
    >
      <Toolbar className={Classnames(styles.header)}>
        <IconButton onClick={closeSideMenu}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((menuItem: MenuItemContext) => (
          <MenuItem key={menuItem.path} menuItemContext={menuItem} />
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;

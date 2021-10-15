import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { selectedMenuSelector } from 'src/components/redux/selectors';
import { MENU_ITEMS } from 'src/routes';
import type { MenuItemContext } from 'src/types';

import Content from './Content';
import Header from './Header';
import SideMenu from './SideMenu';

import { TITLE } from './constants';
import type { LayoutProps } from './Layout.types';

import styles from './Layout.scss';

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const selectedMenuItem: MenuItemContext | undefined = useSelector(selectedMenuSelector);

  const onHeaderMenuButtonClick = () => {
    setMenuOpen(true);
  };

  return (
    <Box className={Classnames(styles.layout, className)}>
      <CssBaseline />
      <Header
        className={Classnames(styles.header)}
        title={selectedMenuItem?.title ?? TITLE}
        menuOpen={menuOpen}
        onMenuButtonClick={onHeaderMenuButtonClick}
      />
      <SideMenu open={menuOpen} menuItems={MENU_ITEMS} closeSideMenu={() => setMenuOpen(false)} />
      <Box component='main' className={Classnames(styles.main, { [styles.mainOpenMenu]: menuOpen })}>
        <Content menuItems={MENU_ITEMS} />
      </Box>
    </Box>
  );
};

export default Layout;

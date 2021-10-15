import React from 'react';
import Classnames from 'classnames';

import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { HeaderProps } from './Header.types';
import styles from './Header.scss';

const Header: React.FC<HeaderProps> = ({ className, title, menuOpen = false, onMenuButtonClick = () => {} }) => {
  return (
    <AppBar
      className={Classnames(
        styles.header,
        {
          [styles.menuOpen]: menuOpen,
        },
        className,
      )}
    >
      <Toolbar>
        <IconButton
          className={Classnames(styles.menuButton)}
          edge='start'
          aria-label='Open menu'
          onClick={onMenuButtonClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={Classnames(styles.title)}>{title}</Typography>
        <IconButton className={Classnames(styles.badge)}>
          <Badge badgeContent={0} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import Classnames from 'classnames';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { push } from 'src/History/history';
import type { MenuItemProps } from './MenuItem.types';

const MenuItem: React.FC<MenuItemProps> = ({ className, menuItemContext: { title, path, icon: Icon } }) => (
  <ListItem className={Classnames(className)} button={true} onClick={() => push({ path })}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
);

export default MenuItem;

import type { MenuItemContext } from 'src/types';
import type { CommonProps } from 'src/components/types';

export interface SideMenuProps extends CommonProps {
  open?: boolean;
  menuItems: MenuItemContext[];
  closeSideMenu?: () => void;
}

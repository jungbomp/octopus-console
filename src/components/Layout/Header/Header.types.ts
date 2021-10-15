import type { CommonProps } from 'src/components/types';

export interface HeaderProps extends CommonProps {
  title?: string;
  menuOpen?: boolean;
  onMenuButtonClick?: () => void;
}

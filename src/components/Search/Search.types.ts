import type { CommonProps } from '../types';

export interface SearchProps extends CommonProps {
  onSubmit?: (inputText: string) => void;
}

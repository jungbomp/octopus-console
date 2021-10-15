import type { CommonProps } from 'src/components/types';

import type { SalesBySkuRecord } from '../SalesBySku.types';

export interface SalesByskuTableProps extends CommonProps {
  data: SalesBySkuRecord[];
}

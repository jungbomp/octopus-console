import AssessmentIcon from '@mui/icons-material/Assessment';
import { lazy } from 'react';

import type { MenuItemContext } from 'src/types';
import { SALES_BY_SKU_PATH_ID, SALES_BY_SKU_PATH_PREFIX, SALES_BY_SKU_TITLE } from './SalesBySku.constants';

const SalesBySku = lazy(() => import('./SalesBySku'));

const saleBySkuMenuItems: MenuItemContext[] = [
  {
    pathId: SALES_BY_SKU_PATH_ID,
    title: SALES_BY_SKU_TITLE,
    path: `/${SALES_BY_SKU_PATH_PREFIX}`,
    icon: AssessmentIcon,
    component: SalesBySku,
    exact: true,
  },
];

export default saleBySkuMenuItems;

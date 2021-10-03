import { baseUrl } from './constants';

export const getOrdersUrl = () => `${baseUrl}/orders`;
export const getSalesBySkuUrl = () => `${getOrdersUrl()}/sales-by-sku`;

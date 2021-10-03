import { SalesBySkuRecord } from 'src/components/SalesBySku/SalesBySku.types';
import type { Orders } from 'src/types';

import { getOrdersUrl, getSalesBySkuUrl } from './apis';
import request from './request';

export const getOrders = (
  orderDateStart: string,
  orderDateEnd: string,
  includeOrderItems?: boolean,
): Promise<Orders[]> =>
  request(getOrdersUrl(), 'GET', undefined, {
    orderDateStart,
    orderDateEnd,
    includeOrderItems: `${(includeOrderItems ?? false).toString()}`,
  })
    .then((response: any) => response?.data || [])
    .catch((error: any) => {
      console.log(error);
      throw error;
    });

export const getSalesBySku = (orderDateStart: string, orderDateEnd: string): Promise<SalesBySkuRecord[]> =>
  request(getSalesBySkuUrl(), 'GET', undefined, {
    orderDateStart,
    orderDateEnd,
  })
    .then((response: any) => response?.data || [])
    .catch((error: any) => {
      console.log(error);
      throw error;
    });

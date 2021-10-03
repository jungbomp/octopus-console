import { format, parse, compareDesc } from 'date-fns';

import { Direction, OrderBy } from './SalesBySku.constants';
import type { SalesBySkuRecord } from './SalesBySku.types';

export const toOrderDateFormat = (date: Date): string => format(date, 'yyyyMMdd');

export const formatNumber = (number: number): string => new Intl.NumberFormat().format(number);

export const compareSalesBySkuRecordsByOrderDate = (lhs: SalesBySkuRecord, rhs: SalesBySkuRecord): number =>
  compareDesc(parse(lhs.orderDate, 'yyyyMMdd', new Date()), parse(rhs.orderDate, 'yyyyMMdd', new Date()));

export const compareSalesBySkuRecordsByStdSku = (lhs: SalesBySkuRecord, rhs: SalesBySkuRecord): number =>
  lhs.stdSku.localeCompare(rhs.stdSku);

export const compareSalesBySkuRecordsByTotalQuantity = (lhs: SalesBySkuRecord, rhs: SalesBySkuRecord): number =>
  rhs.totalQuantity - lhs.totalQuantity;

export const compareSalesBySkuRecords = (lhs: SalesBySkuRecord, rhs: SalesBySkuRecord): number => {
  if (lhs.orderDate !== rhs.orderDate) {
    return compareSalesBySkuRecordsByOrderDate(lhs, rhs);
  }

  return compareSalesBySkuRecordsByStdSku(lhs, rhs);
};

export const sortSalesBySkuRecords = (
  records: SalesBySkuRecord[],
  orderBy: OrderBy,
  direction: Direction,
): SalesBySkuRecord[] => {
  const comparator: (lhs: SalesBySkuRecord, rhs: SalesBySkuRecord) => number =
    orderBy === OrderBy.DEFAULT ? compareSalesBySkuRecords : compareSalesBySkuRecordsByTotalQuantity;

  const salesBySkuRecords: SalesBySkuRecord[] = records.sort(comparator);
  return [...(direction === Direction.DESC ? salesBySkuRecords : salesBySkuRecords.reverse())];
};

export const filterByStdSku = (
  records: SalesBySkuRecord[],
  keyword: string,
  caseSensitive?: boolean,
): SalesBySkuRecord[] =>
  caseSensitive
    ? records.filter((record: SalesBySkuRecord) => record.stdSku.indexOf(keyword) > -1)
    : records.filter(
        (record: SalesBySkuRecord) => record.stdSku.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1,
      );

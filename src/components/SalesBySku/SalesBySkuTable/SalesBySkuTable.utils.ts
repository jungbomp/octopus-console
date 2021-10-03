import type { SalesBySkuRecord } from '../SalesBySku.types';

export const getSelectedPageRecords = (records: SalesBySkuRecord[], rowsPerPage: number, selectedPage: number) => {
  const startIndex = selectedPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return records.length >= startIndex ? records.slice(startIndex, Math.min(records.length, endIndex)) : [];
};

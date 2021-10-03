export const COLUMNS: { title: string; subTitle?: string }[] = [
  {
    title: 'Order Date',
  },
  {
    title: 'Product ID',
  },
  {
    title: 'Standard SKU',
  },
  {
    title: 'Product Name',
  },
  {
    title: 'Total',
    subTitle: 'Qty sold',
  },
  {
    title: 'HB Amazon',
    subTitle: 'Qty Sold',
  },
  {
    title: 'HB eBay',
    subTitle: 'Qty Sold',
  },
  {
    title: 'HB Sears',
    subTitle: 'Qty Sold',
  },
  {
    title: 'HB Walmart',
    subTitle: 'Qty Sold',
  },
  {
    title: 'HB Website',
    subTitle: 'Qty Sold',
  },
  {
    title: 'MX Amazon',
    subTitle: 'Qty Sold',
  },
  {
    title: 'MX eBay',
    subTitle: 'Qty Sold',
  },
  {
    title: 'MX Walmart',
    subTitle: 'Qty Sold',
  },
];

export const ROWS_PER_PAGES = [10, 20, 50, 100, 200];

export const DEFAULT_ROWS_PER_PAGE = 200;
export const INITIAL_SELECTED_PAGE = 0;

export enum SalesBySkuTableOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum OrderBy {
  DEFAULT = 'DEFAULT',
  TOTAL_QUANTITY = 'TOTAL_QUANTITY',
}

export enum Direction {
  DESC = 'DESC',
  ASC = 'ASC',
}

export const DEFAULT_ORDER_BY = OrderBy.DEFAULT;
export const DEFAULT_DIRECTION = Direction.DESC;
export const DEFAULT_MAX_DATE_RANGE = 100;

export const CsvExportHeaders: { label: string; key: string }[] = [
  {
    label: 'Order Date',
    key: 'orderDate',
  },
  {
    label: 'Product ID',
    key: 'productCode',
  },
  {
    label: 'Standard SKU',
    key: 'stdSku',
  },
  {
    label: 'Product Name',
    key: 'productName',
  },
  {
    label: 'Total Quantity',
    key: 'totalQuantity',
  },
  {
    label: 'HB Amazon Quantity',
    key: 'hbAmazonQuantity',
  },
  {
    label: 'HB eBay Quantity',
    key: 'hbEbayQuantity',
  },
  {
    label: 'HB Sears Quantity',
    key: 'hbSearsQuantity',
  },
  {
    label: 'HB Walmart Quantity',
    key: 'hbWalmartQuantity',
  },
  {
    label: 'HB Website Quantity',
    key: 'hbShopifyQuantity',
  },
  {
    label: 'MX Amazon Quantity',
    key: 'mxAmazonQuantity',
  },
  {
    label: 'MX eBay Quantity',
    key: 'mxEbayQuantity',
  },
  {
    label: 'MX Walmart Quantity',
    key: 'mxWalmartQuantity',
  },
];

import React from 'react';
import Classnames from 'classnames';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { formatNumber } from '../../SalesBySku.utils';

import type { SalesBySkuTableRowProps } from './SalesBySkuTableRow.types';

import styles from './SalesBySkuTableRow.scss';
import { dateFormat } from './SalesBySkuTableRow.utils';

const SalesBySkuTableRow: React.FC<SalesBySkuTableRowProps> = ({ className, record }) => {
  return (
    <TableRow className={Classnames(styles.salesBySkuTableRow, className)}>
      <TableCell align='center'>{dateFormat(record.orderDate)}</TableCell>
      <TableCell align='center'>{record.productCode}</TableCell>
      <TableCell>{record.stdSku}</TableCell>
      <TableCell>{record.productName}</TableCell>
      <TableCell align='right'>{formatNumber(record.totalQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.hbAmazonQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.hbEbayQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.hbSearsQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.hbWalmartQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.hbShopifyQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.mxAmazonQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.mxEbayQuantity)}</TableCell>
      <TableCell align='right'>{formatNumber(record.mxWalmartQuantity)}</TableCell>
    </TableRow>
  );
};

export default SalesBySkuTableRow;

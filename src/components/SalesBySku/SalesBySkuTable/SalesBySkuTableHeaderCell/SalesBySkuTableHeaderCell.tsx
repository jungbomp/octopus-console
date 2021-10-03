import React from 'react';
import Classnames from 'classnames';
import TableCell from '@mui/material/TableCell';

import type { SalesBySkuTableHeaderCellProps } from './SalesBySkuTableHeaderCell.types';

import styles from './SalesBySkuTableHeaderCell.scss';

const SalesBySkuTableHeaderCell: React.FC<SalesBySkuTableHeaderCellProps> = ({
  className,
  subTitleClassName,
  title,
  subTitle,
}) => (
  <TableCell className={Classnames(styles.salesBySkuTableHeaderCell, className)}>
    {title}
    {subTitle ? <div className={Classnames(styles.subTitle, subTitleClassName)}>{subTitle}</div> : null}
  </TableCell>
);

export default SalesBySkuTableHeaderCell;

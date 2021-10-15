import React, { useState } from 'react';
import Classnames from 'classnames';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import type { SalesBySkuRecord } from '../SalesBySku.types';

import SalesBySkuTableHeaderCell from './SalesBySkuTableHeaderCell';
import SalesBySkuTableRow from './SalesBySkuTableRow';

import { COLUMNS, DEFAULT_ROWS_PER_PAGE, INITIAL_SELECTED_PAGE, ROWS_PER_PAGES } from './SalesBySkuTable.constants';
import type { SalesByskuTableProps } from './SalesBySkuTable.types';
import { getSelectedPageRecords } from './SalesBySkuTable.utils';

import styles from './SalesBySkuTable.scss';

const SalesBySkuTable: React.FC<SalesByskuTableProps> = ({ className, data }) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_ROWS_PER_PAGE);
  const [page, setPage] = useState<number>(INITIAL_SELECTED_PAGE);

  const onPageChange = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event?.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={Classnames(styles.salesBySkuTable, className)}>
      <Table>
        <TableHead>
          <TableRow className={Classnames(styles.headerRow)}>
            {COLUMNS.map((COLUMN: { title: string; subTitle?: string }, i: number) => (
              <SalesBySkuTableHeaderCell
                className={Classnames(styles.headerRowCellBorder, {
                  [styles.headerRowCell]: i > 2,
                })}
                subTitleClassName={styles.headerRowCellSubTitle}
                key={COLUMN.title}
                title={COLUMN.title}
                subTitle={COLUMN.subTitle}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {getSelectedPageRecords(data, rowsPerPage, page).map((record: SalesBySkuRecord, i: number) => (
            <SalesBySkuTableRow
              key={`${record.orderDate}-${record.stdSku}`}
              record={record}
              className={i % 2 === 1 ? styles.bodyRow : undefined}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[...ROWS_PER_PAGES, { label: 'All', value: -1 }]}
              colSpan={COLUMNS.length}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'arial-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default SalesBySkuTable;

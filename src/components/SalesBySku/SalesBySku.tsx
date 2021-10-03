import React, { useEffect, useState } from 'react';
import Classnames from 'classnames';
import { addDays, differenceInCalendarDays, format, isValid } from 'date-fns';
import { CSVLink } from 'react-csv';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { MuiTextFieldProps } from '@mui/lab/internal/pickers/PureDateInput';

import CircularProgressIcon from '@mui/material/CircularProgress';
import DateRangeIcon from '@mui/icons-material/DateRange';
import logo from 'images/logo.jpg';

import Search from 'src/components/Search';
import { getSalesBySku } from 'src/services/orders.service';

import SalesBySkuTable from './SalesBySkuTable/SalesBySkuTable';

import {
  DEFAULT_MAX_DATE_RANGE,
  DEFAULT_ORDER_BY,
  DEFAULT_DIRECTION,
  OrderBy,
  Direction,
  CsvExportHeaders,
} from './SalesBySku.constants';
import type { SalesBySkuProps, SalesBySkuRecord } from './SalesBySku.types';
import { filterByStdSku, formatNumber, sortSalesBySkuRecords, toOrderDateFormat } from './SalesBySku.utils';

import styles from './SalesBySku.scss';

const getMaxDate = (date: Date | null, days: number): Date | undefined => {
  return date ? addDays(date, days) : undefined;
};

const SalesBySku: React.FC<SalesBySkuProps> = ({ className, maxDateRange = DEFAULT_MAX_DATE_RANGE }) => {
  const [dateRange, setDateRange] = useState<DateRange<Date>>([
    addDays(new Date(Date.now()), -7),
    new Date(Date.now()),
  ]);
  const [orderBy, setOrderBy] = useState<OrderBy>(DEFAULT_ORDER_BY);
  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION);
  const [salesBySkuData, setSalesBySkuData] = useState<SalesBySkuRecord[]>([]);
  const [filteredSalesBySkuData, setFilteredSalesBySkuData] = useState<SalesBySkuRecord[]>(salesBySkuData);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [exportFileName, setExportFileName] = useState<string>('');

  const onChangeDateRange = (range: DateRange<Date>): void => {
    const [startDate, endDate] = range;

    if (
      startDate &&
      endDate &&
      isValid(startDate) &&
      isValid(endDate) &&
      differenceInCalendarDays(endDate, startDate) > maxDateRange
    ) {
      console.log('setNull');
      setDateRange([startDate, null]);
      return;
    }

    setDateRange(range);
  };

  const onChangeOrderBy = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setOrderBy(event.target.value as OrderBy);
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setDirection(event.target.value as Direction);
  };

  useEffect(() => {
    const [startDate, endDate] = dateRange;
    if (startDate && endDate && isValid(startDate) && isValid(endDate)) {
      setShowBackdrop(true);
      getSalesBySku(toOrderDateFormat(startDate), toOrderDateFormat(endDate)).then(
        (salesBySkuRecords: SalesBySkuRecord[]) => {
          setSalesBySkuData(sortSalesBySkuRecords(salesBySkuRecords, orderBy, direction));

          setShowBackdrop(false);
        },
      );
    }
  }, [dateRange]);

  useEffect(() => {
    const [from, to] = dateRange;
    const fromDttm: string = from && isValid(from) ? format(from, 'yyyyMMdd') : '';
    const toDttm: string = to && isValid(to) ? format(to, 'yyyyMMdd') : '';

    setExportFileName(`SalesBySku.${fromDttm}-${toDttm}.${format(new Date(Date.now()), 'yyyyMMddHHmmss')}.csv`);
  }, [dateRange, salesBySkuData]);

  useEffect(() => {
    setSalesBySkuData(sortSalesBySkuRecords(salesBySkuData, orderBy, direction));
  }, [orderBy, direction]);

  useEffect(() => {
    setFilteredSalesBySkuData(filterByStdSku(salesBySkuData, searchText));
  }, [salesBySkuData, searchText]);

  useEffect(() => {
    setTotalQuantity(
      filteredSalesBySkuData.reduce((sum: number, record: SalesBySkuRecord): number => sum + record.totalQuantity, 0),
    );
  }, [filteredSalesBySkuData]);

  return (
    <div className={Classnames(styles.salesBySku, className)}>
      <div className={Classnames(styles.header)}>
        <div className={Classnames(styles.searchContainer)}>
          <Search onSubmit={setSearchText} />
        </div>
        <div className={Classnames(styles.logo)}>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <div className={Classnames(styles.content)}>
        <div className={Classnames(styles.contentHeader)}>
          <div className={Classnames(styles.totalQuantityContainer)}>
            <Typography className={Classnames(styles.totalQuantityLabel)} component='span'>
              Total Quantity Sold
            </Typography>
            <Box className={Classnames(styles.totalQuantityBox)}>
              <Typography className={Classnames(styles.totalQuantity)} component='span'>
                {formatNumber(totalQuantity)}
              </Typography>
            </Box>
          </div>
          <div className={Classnames(styles.tableHeader)}>
            <LocalizationProvider dateAdapter={AdapterDateFns} className={Classnames(styles.dataRangePicker)}>
              <DateRangePicker
                className={Classnames(styles.dataRangePicker)}
                value={dateRange}
                maxDate={getMaxDate(dateRange[0], maxDateRange)}
                onChange={onChangeDateRange}
                renderInput={(
                  { inputProps: startInputProps }: MuiTextFieldProps,
                  { inputProps: endInputProps }: MuiTextFieldProps,
                ) => (
                  <>
                    <FormControl>
                      <InputLabel variant='standard'>From</InputLabel>
                      <Input
                        className={Classnames(styles.dateInput)}
                        startAdornment={
                          <InputAdornment position='start'>
                            <DateRangeIcon />
                          </InputAdornment>
                        }
                        inputProps={startInputProps}
                      />
                    </FormControl>
                    <Box sx={{ mx: 2 }}> to </Box>
                    <FormControl>
                      <InputLabel variant='standard' htmlFor='to'>
                        To
                      </InputLabel>
                      <Input
                        className={Classnames(styles.dateInput)}
                        startAdornment={
                          <InputAdornment position='start'>
                            <DateRangeIcon />
                          </InputAdornment>
                        }
                        inputProps={endInputProps}
                      />
                    </FormControl>
                  </>
                )}
              />
            </LocalizationProvider>
            <FormControl className={Classnames(styles.orderByContainer)}>
              <InputLabel variant='standard'>Sort by</InputLabel>
              <NativeSelect value={orderBy} onChange={onChangeOrderBy}>
                <option value={OrderBy.DEFAULT}>Default</option>
                <option value={OrderBy.TOTAL_QUANTITY}>Total Quantity</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={Classnames(styles.directionContainer)}>
              <InputLabel variant='standard'>Direction</InputLabel>
              <NativeSelect value={direction} onChange={onChangeDirection}>
                <option value={Direction.DESC}>Desc</option>
                <option value={Direction.ASC}>Asc</option>
              </NativeSelect>
            </FormControl>
            <div className={Classnames(styles.buttonContainer)}>
              <CSVLink
                filename={exportFileName}
                target='_blank'
                className={Classnames(styles.csvLink)}
                headers={CsvExportHeaders}
                data={salesBySkuData}
              >
                <Button variant='contained'>Download</Button>
              </CSVLink>
            </div>
          </div>
        </div>
        <div className={Classnames(styles.contentBody)}>
          <SalesBySkuTable data={filteredSalesBySkuData} />
        </div>
      </div>
      <Backdrop className={Classnames(styles.backdrop)} open={showBackdrop} onClick={() => setShowBackdrop(false)}>
        <CircularProgressIcon color='inherit' />
      </Backdrop>
    </div>
  );
};

export default SalesBySku;

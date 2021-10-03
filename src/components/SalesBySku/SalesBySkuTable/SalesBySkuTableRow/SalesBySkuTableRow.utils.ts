import { format, parse } from 'date-fns';

export const dateFormat = (dateStr: string): string => format(parse(dateStr, 'yyyyMMdd', new Date()), 'yyyy-MM-dd');

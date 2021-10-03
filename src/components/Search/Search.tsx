import React, { useEffect, useState } from 'react';
import Classnames from 'classnames';

import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

import { SearchProps } from './Search.types';

import styles from './Search.scss';

const Search: React.FC<SearchProps> = ({ className, onSubmit = () => {} }): JSX.Element => {
  const [inputText, setInputText] = useState<string>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onClick = () => onSubmit(inputText ?? '');

  const onCancel = () => setInputText('');

  useEffect(() => {
    onSubmit(inputText ?? '');
  }, [inputText]);

  return (
    <div className={Classnames(styles.search, className)}>
      <IconButton className={Classnames(styles.iconButton)} onClick={onClick}>
        <SearchIcon />
      </IconButton>
      <InputBase className={Classnames(styles.inputBase)} placeholder='Search' onChange={onChange} value={inputText} />
      <IconButton
        className={Classnames(styles.iconButton, {
          [styles.cancelButton]: !inputText || inputText.length < 1,
        })}
        onClick={onCancel}
      >
        <CancelIcon />
      </IconButton>
    </div>
  );
};

export default Search;

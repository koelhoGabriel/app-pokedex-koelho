import React from 'react';

import styles from './SearchInput.module.scss'
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSubmit: () => void;
  disabled: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
  onClear,
  onSubmit,
  disabled,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className={styles.input__wrapper}>
      <input 
        className={styles.input__control}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <button className={styles.input__button} onClick={onSubmit} disabled={disabled}><FaSearch /></button>
      <button className={styles.input__button} onClick={onClear} disabled={disabled}><FaXmark /></button>
    </div>
  );
};

export default SearchInput;

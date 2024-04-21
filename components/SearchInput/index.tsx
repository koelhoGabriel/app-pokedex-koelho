import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled: boolean;
  previousValue: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onKeyPress, disabled, previousValue }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue !== previousValue && newValue.trim() !== '') {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      onKeyPress={onKeyPress}
      disabled={disabled}
    />
  );
};

export default SearchInput;

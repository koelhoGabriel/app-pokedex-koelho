import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSubmit: () => void;
  disabled: boolean;
  previousValue: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyPress,
  onClear,
  onSubmit,
  disabled,
  previousValue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue !== previousValue || newValue === '') { // Verifica se o valor é diferente do valor anterior ou se está vazio
      onChange(newValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyPress={onKeyPress}
        disabled={disabled}
      />
      <button onClick={onSubmit} disabled={disabled}>Enviar</button>
      <button onClick={onClear} disabled={disabled}>Limpar</button>
    </div>
  );
};

export default SearchInput;

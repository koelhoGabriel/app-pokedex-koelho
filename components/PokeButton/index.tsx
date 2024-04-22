import React from 'react';

interface ButtonProps {
  type: string,
  label?: string;
  hasIcon?: Boolean;
  style?: string
}

const PokeButton: React.FC<ButtonProps> = ({ type, label, hasIcon, style }) => {
  return (
    <button className={`pokebutton ${style}`}>
        {label}
    </button>
  )
};

export default PokeButton;
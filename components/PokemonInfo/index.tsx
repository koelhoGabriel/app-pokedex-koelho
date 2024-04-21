import React from 'react';

interface PokemonInfoProps {
  name: string;
  image: string;
  height: number;
  weight: number;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ name, image, height, weight }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Height: {height}</h3>
      <h3>Weight: {weight}</h3>
    </div>
  );
};

export default PokemonInfo;

"use client"

import React, { useState } from 'react';
import axios from 'axios';

const PokemonSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      setError('Pokémon não encontrado');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchPokemon();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h3>Height: {pokemonData.height}</h3>
          <h3>Weight: {pokemonData.weight}</h3>
        </div>
      )}
      {!loading && !pokemonData && !error && <div>Insira o nome de um Pokémon para pesquisar</div>}
    </div>
  );
};

export default PokemonSearch;
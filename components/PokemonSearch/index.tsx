"use client"

import React, { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import PokemonCard from '@/components/PokemonCard';
import PokeFeedback from '@/components/PokeFeedback';
import pokedexAPI from '@/services/axiosInstance';
import styles from './PokemonSearch.module.scss'

const PokemonSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [previousRequest, setpreviousRequest] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = async () => {
    if (!query || previousRequest === query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await pokedexAPI.get(`/pokemon/${query.toLowerCase()}`);
      setPokemonData(response.data);
      setpreviousRequest(query);
    } catch (error) {
      setError('Pokémon não encontrado');
      setPokemonData(null);
    } finally {
      setLoading(false);
    } 
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchPokemon();
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleSubmit = () => {
    searchPokemon();
  };

  return (
    <div className={styles.pokesearch__wrapper}>
      <div className="container">
        <SearchInput
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onClear={handleClear}
          onSubmit={handleSubmit}
          disabled={loading}
        />
        {loading && <PokeFeedback type="loading" />}
        {error && <PokeFeedback type="error" />}
        {!loading && pokemonData && (
          <PokemonCard
            id={pokemonData.id}
            name={pokemonData.name}
            sprites={pokemonData.sprites}
            stats={pokemonData.stats}
            types={pokemonData.types}
          />
        )}
        {!loading && !pokemonData && !error && <PokeFeedback type="empty" />}
      </div>
    </div>
  );
};

export default PokemonSearch;

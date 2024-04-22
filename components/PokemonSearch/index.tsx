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
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchStarted, setSearchStarted] = useState(false); // Novo estado para controlar se uma nova pesquisa foi iniciada

  const searchPokemon = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    setSearchStarted(true); // Indica que uma nova pesquisa foi iniciada

    try {
      const response = await pokedexAPI.get(`/pokemon/${query.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      setError('Pokémon não encontrado');
      setPokemonData(null); // Limpa os dados do Pokémon em caso de erro
    } finally {
      setLoading(false);
    } 
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    setSearchStarted(false); // Reseta o estado para indicar que uma nova pesquisa ainda não foi iniciada
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchPokemon();
    }
  };

  const handleClear = () => {
    setQuery('');
    setSearchStarted(false); // Reseta o estado ao limpar o campo de pesquisa
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
          onKeyPress={handleKeyPress}
          onClear={handleClear}
          onSubmit={handleSubmit}
          disabled={loading}
          previousValue={searchStarted ? '' : query} // Limpa o valor anterior apenas se uma nova pesquisa foi iniciada
        />
        {loading && <PokeFeedback type="loading" />}
        {error && <PokeFeedback type="error" />}
        {pokemonData && (
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

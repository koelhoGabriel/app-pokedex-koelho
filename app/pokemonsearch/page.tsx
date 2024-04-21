"use client"

import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from '@/components/SearchInput';
import Loader from '@/components/Messages/Loader';
import PokemonInfo from '@/components/PokemonInfo';
import EmptyState from '@/components/Messages/EmptyState';
import ErrorState from '@/components/Messages/ErrorState';

const PokemonSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [previousQuery, setPreviousQuery] = useState('');

  const searchPokemon = async () => {
    if (!query || query === previousQuery) return; // Verifica se a consulta está vazia ou se é igual à anterior
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      setPokemonData(response.data);
      setPreviousQuery(query); // Atualiza o valor da consulta anterior
    } catch (error) {
      setError('Pokémon não encontrado');
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

  return (
    <div>
      <SearchInput
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={loading}
        previousValue={previousQuery} // Passando o valor da consulta anterior para o componente SearchInput
      />
      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {pokemonData && (
        <PokemonInfo
          name={pokemonData.name}
          image={pokemonData.sprites.front_default}
          height={pokemonData.height}
          weight={pokemonData.weight}
        />
      )}
      {!loading && !pokemonData && !error && <EmptyState />}
    </div>
  );
};

export default PokemonSearch;

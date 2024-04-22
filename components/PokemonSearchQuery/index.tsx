"use client"

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import usePokemon from '@/hooks/usePokemon';
import SearchInput from '@/components/SearchInput';
import PokeFeedback from '@/components/PokeFeedback';
import PokemonCard from '@/components/PokemonCard';

const PokemonSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [previousQuery, setPreviousQuery] = useState('');
  const { data } = usePokemon(query)

  console.log(data)
  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setPreviousQuery(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    setPreviousQuery('');
  };

  return (
    <div className='poke__searchquery'>
      <SearchInput
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onClear={handleClear}
        onSubmit={() => setPreviousQuery(query)}
        disabled={loading}
        previousValue={previousQuery}
      />
      {loading && <PokeFeedback type="loading" />}
      {error && <PokeFeedback  type="error" />}
      {data && (
        <PokemonCard
          id={data.id}
          name={data.name}
          image={data.sprites.front_default}
          stats={data.stats}
          types={data.types}
        />
      )}
      {!loading && !data && !error && <PokeFeedback type="empty" />}
    </div>
  );
};

export default PokemonSearch;

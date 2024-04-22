import React from 'react';
import PokemonSearch from '@/components/PokemonSearch';
import PokeHeader from '@/components/PokeHeader';
import PokeFooter from '@/components/PokeFooter';

const Home: React.FC = () => {
  return (
    <div className='pokedex__wrapper'>
      <PokeHeader />
      <PokemonSearch />
      <PokeFooter />
    </div>
  );
};

export default Home;
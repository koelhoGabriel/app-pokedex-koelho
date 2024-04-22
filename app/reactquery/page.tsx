import React from 'react';
import PokemonSearchQuery from '@/components/PokemonSearchQuery';
import PokeHeader from '@/components/PokeHeader';
import PokeFooter from '@/components/PokeFooter';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

const Home: React.FC = () => {
  return (
    <div className='pokedex__wrapper'>
      <QueryClientProvider client={queryClient}>
        <PokeHeader />
        <PokemonSearchQuery />
        <PokeFooter />
      </QueryClientProvider>
    </div>
  );
};

export default Home;
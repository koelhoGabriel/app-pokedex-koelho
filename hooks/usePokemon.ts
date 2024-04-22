import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import pokeAPI from '@/services/axiosInstance'
import { Pokemon } from '@/types/pokemons'

async function getPokemon(name: string): Promise<Pokemon> {
  const { data } = await pokeAPI.get<Pokemon>(`pokemon/${name}`)

  return data
}

export default function usePokemon(name: string) {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name),
  })
}
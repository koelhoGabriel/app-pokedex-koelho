import axios from 'axios';

const pokedexAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default pokedexAPI;
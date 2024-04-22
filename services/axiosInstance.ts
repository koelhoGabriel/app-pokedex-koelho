import axios from 'axios';

const pokedexAPI = axios.create({
  //baseURL: process.env.API_URL || 'https://pokeapi.co/api/v2'
  baseURL: process.env.API_URL || 'http://localhost:4000'
});

export default pokedexAPI;
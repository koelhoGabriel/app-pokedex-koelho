import React from 'react';
import styles from './pokemoncard.module.scss'
import { Pokemon } from '@/types/pokemons';
import PokemonTypeTag from '../PokeTypeTag';
import { capitalizeFirstLetter } from '@/utils';

// Interface for map Object
interface StatusLabelMapping {
  [key: string]: string;
}

// Função para mapear os nomes dos status para rótulos amigáveis
const statusLabels: StatusLabelMapping = {
  'hp': 'HP',
  'attack': 'Attack',
  'defense': 'Defense',
  'speed': 'Speed',
  'special-attack': 'Sp. Attack',
  'special-defense': 'Sp. Defense',
};

// Função para mapear os nomes dos status para rótulos amigáveis
const mapStatusLabel = (statusName: string): string => {
  return statusLabels[statusName] || statusName;
};

const PokemonCard: React.FC<Pokemon> = ({ id, types, name, sprites, stats }) => {
  return (
    <div className={`${styles.card} ${types[0].type.name}`}>
      <div className={styles.card__header}>
        <h2>#{id} {capitalizeFirstLetter(name)} - <PokemonTypeTag tags={types} /></h2>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__image}>
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className={styles.card__stats}>
        {stats.map((stat, index) => (
            <div key={index} className={styles.info__stats__item}>
              <span className={styles.info__stats__label}>{mapStatusLabel(stat.stat.name)}: </span>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

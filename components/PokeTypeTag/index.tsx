import React from 'react';
import { Type } from '@/types/pokemons'
import styles from './poketypetag.module.scss'
import { capitalizeFirstLetter } from '@/utils';

interface PokemonTypeTagProps {
  tags: Array<Type>;
}

const PokeTypeTag: React.FC<PokemonTypeTagProps> = ({ tags }) => {
  return (
    <ul className={styles.tags__list}>
      {tags.map((type, index) => <li className={`type ${type.type.name} ${styles.tags__item}`} key={index}>{capitalizeFirstLetter(type.type.name)} </li>)}
    </ul>
  )
};

export default PokeTypeTag;

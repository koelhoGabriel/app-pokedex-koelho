import React from 'react';
import style from './pokeheader.module.scss';
import Image from 'next/image';

const PokeHeader: React.FC = () => {
  return (
  <header className={style.poke__header}>
    <div className='container'>
      <h1 className={style.poke__logo}>
        <Image alt="pokedex logo" src="/pokeball.svg" width="50" height="50" />
        <span>POKEDÉX</span>
      </h1>
    </div>
  </header>
  )
};

export default PokeHeader;
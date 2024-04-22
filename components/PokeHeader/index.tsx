import React from 'react';
import style from './pokeheader.module.scss';
import Image from 'next/image';

const PokeHeader: React.FC = () => {
  return (
  <header className={style.poke__header}>
    <div className='container'>
        <Image alt="pokedex logo" src="/small-logo.png" width="130" height="48" />
    </div>
  </header>
  )
};

export default PokeHeader;
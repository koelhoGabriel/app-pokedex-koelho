import React from 'react';
import styles from './pokefooter.module.scss'

const PokeFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.poke__footer}>
      <div className='container'><span>{currentYear} All rights reserved</span></div>
    </footer>
  );
};

export default PokeFooter;
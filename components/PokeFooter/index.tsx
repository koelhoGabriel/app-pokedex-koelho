import React from 'react';
import styles from './pokefooter.module.scss'

const PokeFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.poke__footer}>
      <div className='container'><span>{currentYear} - Todos os direitos não reservados</span></div>
    </footer>
  );
};

export default PokeFooter;
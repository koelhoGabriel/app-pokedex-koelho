import React from 'react';
import styles from './pokefeedback.module.scss';

interface MessageState {
  type: 'empty' | 'error' | 'loading'; //keyof typeof defaultMessages,
  message?: string;
}

const defaultMessages = {
  empty: 'Insira o nome de um Pokémon para pesquisar',
  error: 'Nenhum pokemon encontrado com este nome',
  loading: 'Carregando informações do pokemon'
}

const PokeFeedback: React.FC<MessageState> = ({ message, type }) => {
  const currentMessage = message ?? defaultMessages[type]

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{currentMessage}</h3>
    </div>
  )
};

export default PokeFeedback;

import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
  return (
    <div className={styles.Cards}>
      {props.emojis.map((emoji, key) => (
        <Card
          isFound={props.foundCards.filter(f => f === emoji).length > 0}
          key={key}
          selectedCard={props.selectedCard}
          id={key}
          cardFace={emoji}
          onSelectedCard={props.onSelectedCard}
        />
      ))}
    </div>
  );
}

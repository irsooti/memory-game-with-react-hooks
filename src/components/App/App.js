import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Cards from '../Cards/Cards';
import emojis, { randomEmojiListGenerator } from '../../const/emojis';
import Button from '../Button/Button';

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [foundCards, setFoundCards] = useState([]);
  const [_emojis, setEmojis] = useState([]);
  const [remainingCards, setRemainingCards] = useState(10);

  let level = {
    hard: 30,
    medium: 20,
    easy: 10
  };

  let orderedEmojisByDifficult = l => {
    let bigOne = [...emojis];
    let clone1 = bigOne.slice(0, level[l]);
    let clone2 = bigOne.slice(0, level[l]);

    setRemainingCards(clone1.length);

    return [...clone1, ...clone2];
  };

  const [appName] = useState('Hooks memory game');

  const changeDifficulty = level => {
    setEmojis(randomEmojiListGenerator(orderedEmojisByDifficult(level)));
  };

  const useSetSelectedCard = cardFace => {
    console.log(selectedCard);
    if (selectedCard === null) setSelectedCard(cardFace);
    else if (
      selectedCard.face === cardFace.face &&
      selectedCard.id !== cardFace.id
    ) {
      setFoundCards(foundCards.concat(cardFace.face));
      setSelectedCard(null);
      setRemainingCards(remainingCards - 1);
    } else setSelectedCard(null);
  };

  // 🤷‍ componentDidMount/ComponentDidUpdate similar behaviour
  // https://reactjs.org/docs/hooks-effect.html

  useEffect(() => {
    console.log(remainingCards);
    if (remainingCards === 0) alert('You won!');
  });

  return (
    <div className={styles.App}>
      <div style={{ paddingTop: 30 }}>
        <h1>{appName}</h1>
        <div className={styles.btns}>
          <Button onClick={() => changeDifficulty('easy')}>Ez</Button>
          <Button onClick={() => changeDifficulty('medium')}>Medium</Button>
          <Button onClick={() => changeDifficulty('hard')}>Hard</Button>
        </div>
        <Cards
          difficulty={level.easy}
          selectedCard={selectedCard}
          foundCards={foundCards}
          emojis={_emojis}
          onSelectedCard={useSetSelectedCard}
        />
      </div>
    </div>
  );
}

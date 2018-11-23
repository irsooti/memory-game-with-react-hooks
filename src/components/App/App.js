import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Cards from '../Cards/Cards';
import emojis, { randomEmojiListGenerator } from '../../const/emojis';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import Scores from '../Scores/Scores';

export default function App() {
  const [appName] = useState('Memory game');
  const [selectedCard, setSelectedCard] = useState(null);
  const [foundCards, setFoundCards] = useState([]);
  const [_emojis, setEmojis] = useState([]);
  const [remainingCards, setRemainingCards] = useState(10);
  const [gameStartedAt, setGameStart] = useState(null);
  const [gameEndAt, setGameEndAt] = useState(null);
  const [showScores, setShowScores] = useState(false);
  const [mode, setMode] = useState([])

  let level = {
    hard: 30,
    medium: 20,
    easy: 1
  };

  let orderedEmojisByDifficult = l => {
    let bigOne = [...emojis];
    let clone1 = bigOne.slice(0, level[l]);
    let clone2 = bigOne.slice(0, level[l]);

    setRemainingCards(clone1.length);

    return [...clone1, ...clone2];
  };

  const changeDifficulty = l => {
    setEmojis(randomEmojiListGenerator(orderedEmojisByDifficult(l)));
    setFoundCards([]);
    setRemainingCards(level[l]);
    setMode(l);
    setGameStart(new Date());
  };

  const useSetSelectedCard = cardFace => {
    console.log(remainingCards);
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

  document.title = 'Memo!'

  useEffect(() => {
    console.log(remainingCards);
    if (remainingCards === 0) {
      setGameEndAt(new Date());
      setShowScores(true);
    }
  }, [remainingCards]);



  return (
    <div className={styles.App}>
      <div style={{ paddingTop: 30 }}>
        <h1 style={{fontSize: '2em', textTransform: 'uppercase'}}>{appName} </h1>
        <h5 style={{color: '#FFF'}}>{remainingCards === 0 ? 'Click a mode to play again!' : null}</h5>
        <div className={styles.btns}>
          <Button isSelected={mode === 'easy'} onClick={() => changeDifficulty('easy')}>Ez</Button>
          <Button isSelected={mode === 'medium'} onClick={() => changeDifficulty('medium')}>Medium</Button>
          <Button isSelected={mode === 'hard'} onClick={() => changeDifficulty('hard')}>Hard</Button>
        </div>
        <>
          <Cards
            difficulty={level.easy}
            selectedCard={selectedCard}
            foundCards={foundCards}
            emojis={_emojis}
            onSelectedCard={useSetSelectedCard}
          />
          <Overlay onClose={() => setShowScores(false)} isVisible={showScores}>
            <Scores onClose={() => setShowScores(false)} mode={mode} start={gameStartedAt} end={gameEndAt} />
          </Overlay>
        </>
      </div>
    </div>
  );
}

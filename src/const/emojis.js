export const emojis = [
  '🤷‍',
  '♂️',
  '🎄',
  '🤳',
  '😜',
  '😊',
  '😂',
  '😁',
  '💕',
  '😘',
  '😍',
  '😒',
  '❤',
  '🤣',
  '👍',
  '🙌',
  '🤦',
  '✌',
  '🤞',
  '💋',
  '👏',
  '💖',
  '😢',
  '🎶',
  '😎',
  '😉',
  '🌹',
  '🎉',
  '🎂',
  '🐱'
];

export const randomEmojiListGenerator = cards => {
  let cardsCopy = cards.concat();
  let newCardSort = [];

  cards.forEach(element => {
    let index = Math.floor(Math.random() * cardsCopy.length);
    newCardSort.push(cardsCopy.splice(index, 1)[0]);
  });

  return newCardSort;
};

export default emojis;

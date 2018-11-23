import Axios from 'axios';

export const getScores = async (mode) => {
  let container = [];
  let { data } = await Axios.get(
    'https://helper-microservices.firebaseio.com/scores.json'
  );

  Object.keys(data).map((d, i) => container.push(data[d]));
  return container
  .filter(f => f.mode === mode)
  .sort((a, b) => a.score - b.score).slice(0, 10);
};

export const submitScore = (name, score, mode) => {
  return Axios.post('https://helper-microservices.firebaseio.com/scores.json', {
    name,
    score,
    mode
  }).then(data => data);
};

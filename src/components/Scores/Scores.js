import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Overlay from '../Overlay/Overlay';
import classes from './Scores.module.css';
import WinnerInput from '../WinnerInput/WinnerInput';
import { getScores } from '../../api/fb';

const Scores = props => {
  const { end, start } = props;
  const duration = moment.duration(moment(end).diff(moment(start)));
  const [scores, setScores] = useState([]);

  useEffect(
    () => {
      getScores(props.mode).then(result => {
        console.log(result);

        let newScore = result
          .concat({ name: '_X_X_X_', score: duration.asSeconds() })
          .sort((a, b) => a.score - b.score)
          .slice(0, 10);

        setScores(newScore);
      });
    },
    [end, start]
  );

  return (
    <div className={classes.Scores}>
      <div className={classes.Leaderboard}>
        <ol>
          {scores.map((score, i) =>
            score.name === '_X_X_X_' ? (
              <li>
                <WinnerInput
                  onClose={props.onClose}
                  mode={props.mode}
                  score={duration.asSeconds()}
                />
              </li>
            ) : (
              <li>{score.name}</li>
            )
          )}
        </ol>
      </div>

      <div className={classes.Score}>Your score: {duration.asSeconds()}</div>
    </div>
  );
};

export default Scores;

import React, { useState, useEffect } from 'react';
import classes from './WinnerInput.module.css';
import { submitScore } from '../../api/fb';

function WinnerInput(props) {
  const [winnerName, setWinnerName] = useState('');
  const [score, setScore] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    submitScore(winnerName, props.score, props.mode).then(result =>
      console.log(result)
    );
    props.onClose();
  };

  let ref = React.createRef();

//   useEffect(() => {
//       ref.current.autofocus;
//   });

  return (
    <form  onSubmit={onSubmit} className={classes.WinnerInput}>
      <input
        ref={ref}
        autoFocus={true}
        placeholder="YOUR NICKNAME"
        onChange={evt => setWinnerName(evt.target.value)}
        className={classes.Input}
        type="text"
      />{' '}
      <input
        className={classes.Save}
        type="submit"
        value="Save"
      />
    </form>
  );
}

export default WinnerInput;

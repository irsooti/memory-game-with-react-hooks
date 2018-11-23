import React from 'react';
import classes from './FlipCard.module.css';

function FlipCard(props) {
  const { isFlipped, isFound } = props;

  let containerClasses = [classes['flip-container']];
  if (isFlipped) containerClasses.push(classes.selected);
  if (isFound) containerClasses.push(classes.found)

  return (
    <div className={containerClasses.join(' ')}>
      <div className={classes.flipper}>
        <div onClick={props.onClick} className={classes['front'] + ' ' + classes.Card}>?</div>
        <div onClick={props.onClick} className={classes['back'] + ' ' + classes.Card}>{props.children}</div>
      </div>
    </div>
  );
}

export default FlipCard;

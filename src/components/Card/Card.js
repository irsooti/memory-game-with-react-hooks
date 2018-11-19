import React, { useState } from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = props => {
    return (
      props.selectedCard &&
      (props.selectedCard.face === props.cardFace &&
        props.selectedCard.id === props.id)
    );
  };

  let stylesApplied = [styles.Card];

  if (isHovered) stylesApplied.push(styles.hovered);

  if (isSelected(props)) {
    stylesApplied.push(styles.selected);
  }

  if (props.isFound) stylesApplied.push(styles.found);

  return (
    <div
      className={stylesApplied.join(' ')}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onClick={() =>
        !props.isFound && !isSelected(props)
          ? props.onSelectedCard({ face: props.cardFace, id: props.id })
          : null
      }
    >
      {props.isFound || isSelected(props) ? props.cardFace : '?'}
    </div>
  );
}

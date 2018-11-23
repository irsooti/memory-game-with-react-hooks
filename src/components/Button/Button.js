import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
  const { isSelected } = props;


  return (
    <button {...props} className={styles.Btn + ' ' + (isSelected ? styles.Active : '')}>
      {props.children}
    </button>
  );
}

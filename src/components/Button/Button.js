import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button {...props} className={styles.Btn}>
      {props.children}
    </button>
  )
}

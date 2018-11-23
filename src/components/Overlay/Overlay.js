import React from 'react';
import classes from './Overlay.module.css';

const Overlay = props => {
  const { isVisible } = props;

  return (
    <>
      {isVisible ? (
        <>
          <div onClick={props.onClose} className={classes.Close}> X CLOSE</div>

          <div className={classes.Overlay}>{props.children}</div>
        </>
      ) : null}
    </>
  );
};

export default Overlay;

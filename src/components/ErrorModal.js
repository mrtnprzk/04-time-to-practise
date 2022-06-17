import React from 'react'
import CardWrap from "./UI/CardWrap";
import classes from "./ErrorModal.module.css";
import Button from './UI/Button';

const Invalid = (props) => {

  function clickHandler(){
    props.setError()
  }

  return (
    <>
      <div className={classes.backdrop} onClick={clickHandler}/>
      <CardWrap className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.text}</p>
        </div>

        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </CardWrap>
    </>
  );
}

export default Invalid
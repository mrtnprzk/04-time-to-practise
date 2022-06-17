import React from 'react'
import classes from "./CardWrap.module.css";

const CardWrap = (props) => {
  return (
    <div className={`${classes.wrap} ${props.className}`}>{props.children}</div>
  );
}

export default CardWrap
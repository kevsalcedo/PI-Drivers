import React from 'react'
import style from "./Card.module.css"

const Card = (props) => {
  return (
    <div className={style.card}>
      <h2 className={style.cardName}>{props.forename} {props.surname}</h2>
      <img className={style.cardImg} src={props?.image} alt={props.forename}/>
    </div>
  );
};

export default Card;

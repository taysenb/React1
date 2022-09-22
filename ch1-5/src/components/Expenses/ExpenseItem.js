import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense item evaluated by react");
  //useState is similar to all react commands starting with 'use'

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    // useState helps with reruning functions with changing values
    //vv gives all inside <Card> the styles from Card.css
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
    //all commands like onClick require a function in brackets
  ); //^^clickhandler is a function call but dont add () after call or its called 2x
}; //<div></div><div></div> not allowed in react returns

export default ExpenseItem;

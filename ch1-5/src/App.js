//\Users\tayse\Desktop\React\react-complete-guide> npm run start
import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpanseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  //^^does same thing as the return below
  return (
    <div>
      <NewExpense onAddExpense={addExpanseHandler} />
      <Expenses expenses={expenses} />
    </div> //^^connects to the items lines in Expenses.js
  ); //rewatch vid 60 if confused on file connections above
};

// When u hear 'lifying the state up' it means moving data from a child component
//to some parent component to either use it there or pass it down to other child
export default App;

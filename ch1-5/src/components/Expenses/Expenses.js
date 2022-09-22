import React, { useState } from "react";
//useState is used to change what a component displays on screen
//calling useState again will not update its value
import ExpenseItem from "./ExpenseItem";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //below is used to filter out list when year is selected
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    //<ExpenseFilter > is custom made component capital E required
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
    //<expenseItem/> is the function from expenseItem.js
  ); //always use key={} like above when useing map() elswhere
};

export default Expenses;

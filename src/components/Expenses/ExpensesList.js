import { useCallback, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <p>No expense for the year</p>;
  }

  return (
    <ul className="expenses-List">
      {props.items.map((expenseObject) => (
        <ExpenseItem
          key={expenseObject.id}
          title={expenseObject.title}
          amount={expenseObject.amount}
          date={expenseObject.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;

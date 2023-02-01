import { useCallback, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2022");

  //to filter the original array based on the selected year
  const arrayFilteredbyYear = props.array.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //when the year is changed
  const onYearChangeHandler = (year) => {
    setYear(year);
  };

  //var used to render content in JSX depending on the length of the filtered array
  let expenseItemArray = <p>No expense for the year</p>;

  //if filtered array has some items then assign the given JSX to it
  if (arrayFilteredbyYear.length > 0) {
    expenseItemArray = arrayFilteredbyYear.map((expenseObject) => (
      <ExpenseItem
        key={expenseObject.id}
        title={expenseObject.title}
        amount={expenseObject.amount}
        date={expenseObject.date}
      ></ExpenseItem>
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearChangeHandler={onYearChangeHandler}
      ></ExpensesFilter>

      {expenseItemArray}

      {/* {props.array.map((expenseObject) => (
        <ExpenseItem
          key={expenseObject.id}
          title={expenseObject.title}
          amount={expenseObject.amount}
          date={expenseObject.date}
        ></ExpenseItem>
      ))} */}
    </Card>
  );
}

export default Expenses;

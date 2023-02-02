import { useCallback, useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
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

  //if filtered array has some items then assign the given JSX to it

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearChangeHandler={onYearChangeHandler}
      ></ExpensesFilter>

      <ExpensesList items={arrayFilteredbyYear}></ExpensesList>
    </Card>
  );
}

export default Expenses;

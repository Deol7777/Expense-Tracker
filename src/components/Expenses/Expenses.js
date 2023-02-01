import { useCallback, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setYear] = useState(2022);

  const onYearChangeHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearChangeHandler={onYearChangeHandler}
      ></ExpensesFilter>

      {props.array.map((expenseObject) => (
        <ExpenseItem
          title={expenseObject.title}
          amount={expenseObject.amount}
          date={expenseObject.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;

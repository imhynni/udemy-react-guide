import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setShowForm(false);
  };

  const addNewClickHandler = () => {
    setShowForm(true);
  };

  const cancelClickHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelClickHandler}
        />
      ) : (
        <button onClick={addNewClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

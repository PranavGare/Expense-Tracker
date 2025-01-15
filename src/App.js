import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Balance from "./Balance";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [editExpense, setEditExpense] = useState(null);  // Track the expense being edited

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance + expense.amount);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);

    const newBalance = updatedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    setBalance(newBalance);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    const newBalance = updatedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    setBalance(newBalance);
  };

  return (
    <div className="app-container">
      <h1 className="header">Expense Tracker</h1>
      <Balance balance={balance} />
      <ExpenseForm addExpense={addExpense} editExpense={editExpense} updateExpense={updateExpense} />
      <ExpenseList
        expenses={expenses}
        setEditExpense={setEditExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;

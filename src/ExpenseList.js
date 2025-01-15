import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ExpenseList({ expenses, setEditExpense, deleteExpense }) {
  return (
    <div className="expense-list">
      <h3>Expense History</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className={expense.type}>
            <span>{expense.description}</span>
            <span>{expense.type === "income" ? "+" : "-"}Rs{Math.abs(expense.amount)}</span>
            <div className="actions">
              <button onClick={() => setEditExpense(expense)}>
                <FaEdit />
                Edit
              </button>
              <button onClick={() => deleteExpense(expense.id)}>
                <FaTrash />
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

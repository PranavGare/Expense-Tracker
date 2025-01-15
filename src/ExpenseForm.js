import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

function ExpenseForm({ addExpense, editExpense, updateExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");

  useEffect(() => {
    if (editExpense) {
      setDescription(editExpense.description);
      setAmount(Math.abs(editExpense.amount));
      setType(editExpense.amount > 0 ? "income" : "expense");
    }
  }, [editExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newExpense = {
      id: editExpense ? editExpense.id : Date.now(),
      description,
      amount: type === "income" ? parseFloat(amount) : -parseFloat(amount),
      type,
    };

    if (editExpense) {
      updateExpense(newExpense);
    } else {
      addExpense(newExpense);
    }

    setDescription("");
    setAmount(0);
    setType("expense");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">
        <FaPlus />
        {editExpense ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ExpenseForm;

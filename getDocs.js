import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import React, { useState, useEffect } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from Firestore
  useEffect(() => {
    const fetchExpenses = async () => {
      const querySnapshot = await getDocs(collection(db, "expenses"));
      const expensesData = querySnapshot.docs.map(doc => doc.data());
      setExpenses(expensesData);
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} paid ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

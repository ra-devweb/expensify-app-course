import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
      </Link>
      <p>{amount}</p>
      <span>({createdAt})</span>
    </div>
  );
};

export default ExpenseItem;

import React from 'react';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';
import ExpenseItem from './ExpenseItem';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expense</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);

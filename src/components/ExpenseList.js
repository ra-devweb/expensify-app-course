import React from 'react';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';
import ExpenseItem from './ExpenseItem';

export const ExpenseList = (props) => (
  <div className='container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Expenses</div>
      <div className='show-for-desktop'>Expense</div>
      <div className='show-for-desktop'>Amount</div>
    </div>

    {props.expenses.length === 0 ? (
      <div className='list-body list-message'>
        <span>No expenses</span>
      </div>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })
    )}
    <br />
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);

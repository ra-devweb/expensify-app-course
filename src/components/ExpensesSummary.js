import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import addExpensesTotal from '../selectors/addExpensesTotal';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

  const formattedExpensesTotal = numeral(expensesTotal / 100).format(
    '0,0.00 $'
  );

  return (
    <div className='summary'>
      <div className='container'>
        <h1 className='summary__title'>
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
        </h1>

        <div className='summary__box-btn'>
          <Link className='summary__link btn' to='/create'>&#9998; Add expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: addExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startUpdateExpense, startDeleteExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  updateExpense = (expense) => {
    this.props.updateExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  deleteExpense = () => {
    this.props.deleteExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.updateExpense}
        />
        <button onClick={this.deleteExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateExpense: (id, expense) => dispatch(startUpdateExpense(id, expense)),
    deleteExpense: (id) => dispatch(startDeleteExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

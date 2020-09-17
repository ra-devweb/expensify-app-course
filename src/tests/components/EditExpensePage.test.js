import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let updateExpense, deleteExpense, history, wrapper;

beforeEach(() => {
  updateExpense = jest.fn();
  deleteExpense = jest.fn();
  history = {
    push: jest.fn(),
  };
  wrapper = shallow(
    <EditExpensePage
      updateExpense={updateExpense}
      deleteExpense={deleteExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test('Should render Edit expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')({ description: 'New' });

  expect(history.push).toHaveBeenLastCalledWith('/');

  expect(updateExpense).toHaveBeenLastCalledWith('1', { description: 'New' });
});

test('Should handle remove expense', () => {
  wrapper.find('button').simulate('click');

  expect(history.push).toHaveBeenLastCalledWith('/');

  expect(deleteExpense).toHaveBeenLastCalledWith('1');
});

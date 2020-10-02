import moment from 'moment';

import expensesReducer from '../../reducers/expenses';
import expensesData from '../fixtures/expenses';

expensesData[0].id = '123456abc';

test('Should setup default expenses array value', () => {
  const state = expensesReducer(undefined, { type: '@@init' });

  expect(state).toEqual([]);
});

test('Should add new expense', () => {
  const newExpense = {
    description: 'Iphone',
    note: 'Done!',
    amount: 2100,
    createdAt: moment(),
  };

  const state = expensesReducer(expensesData, {
    type: 'ADD_EXPENSE',
    expense: newExpense,
  });

  expect(state).toEqual([...expensesData, { ...newExpense }]);
});

test('Should update expense', () => {
  const state = expensesReducer(expensesData, {
    type: 'UPDATE_EXPENSE',
    id: expensesData[0].id,
    update: { description: 'Hallo' },
  });

  expect(state[0]).toEqual({
    id: expensesData[0].id,
    description: 'Hallo',
    note: '',
    amount: 3500,
    createdAt: 0,
  });
});

test("Should if don't find id of update expense", () => {
  const state = expensesReducer(expensesData, {
    type: 'UPDATE_EXPENSE',
    id: '-1',
    update: { description: 'Hallo' },
  });

  expect(state).toEqual(expensesData);
});

test('Should delete expense', () => {
  const state = expensesReducer(expensesData, {
    type: 'DELETE_EXPENSE',
    id: expensesData[0].id,
  });

  expect(state).toEqual([expensesData[1], expensesData[2]]);
});

test("Should if don't find id of delete expense", () => {
  const state = expensesReducer(expensesData, {
    type: 'DELETE_EXPENSE',
    id: '-1',
  });

  expect(state).toEqual(expensesData);
});

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expensesData[1]],
  };

  const state = expensesReducer(expensesData, action);

  expect(state).toEqual([expensesData[1]]);
});

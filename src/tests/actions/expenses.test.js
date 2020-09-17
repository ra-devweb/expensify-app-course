import {
  addExpense,
  updateExpense,
  deleteExpense,
} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = deleteExpense({ id: '123456abc' });
  expect(action).toEqual({
    type: 'DELETE_EXPENSE',
    id: '123456abc',
  });
});

test('Should setup update expense action object', () => {
  const action = updateExpense('123456abc', { note: 'A new fresh note' });
  expect(action).toEqual({
    type: 'UPDATE_EXPENSE',
    id: '123456abc',
    update: {
      note: 'A new fresh note',
    },
  });
});

test('Should setup add expense action object with provider values', () => {
  const expense = {
    description: 'Rent',
    note: 'A new note',
    amount: 1100,
    createdAt: 11000,
  };

  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test('Should setup add expense action object with default value', () => {
  const expense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

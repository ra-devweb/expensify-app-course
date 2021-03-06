import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addExpense,
  startAddExpense,
  updateExpense,
  deleteExpense,
  setExpenses,
  startSetExpenses,
  startDeleteExpense,
  startUpdateExpense,
} from '../../actions/expenses';
import database from '../../firebase/firebase';

import expenses from '../fixtures/expenses';

const uid = 'abc123456';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });

  database
    .ref(`users/${uid}/expenses`)
    .set(expenseData)
    .then(() => done());
});

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
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1],
  });
});

test('Should add expense to database and store', (done) => {
  const expenseData = {
    description: 'Rent',
    note: 'done!',
    amount: 5000,
    createdAt: 1000,
  };

  const store = createMockStore({ auth: { uid } });

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('Should setup add expense action object with default value', (done) => {
  const expenseDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const store = createMockStore({ auth: { uid } });

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefault,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

test('Should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('Should fetch data from firebase', (done) => {
  const store = createMockStore({ auth: { uid } });

  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});

test('Should remove expense from firebase', (done) => {
  const store = createMockStore({ auth: { uid } });

  const id = '123456abc';

  store
    .dispatch(startDeleteExpense(id))
    .then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: 'DELETE_EXPENSE',
        id,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('Should update expense for firebase', (done) => {
  const store = createMockStore({ auth: { uid } });

  const id = '123456abc';

  const update = {
    amount: 60000,
  };

  store
    .dispatch(startUpdateExpense(id, update))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'UPDATE_EXPENSE',
        id,
        update,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(update);
      done();
    });
});

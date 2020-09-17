import moment from 'moment';

import selectExpenses from '../../selectors/expenses';
import expensesData from '../fixtures/expenses';

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const results = selectExpenses(expensesData, filters);
  expect(results).toEqual([expensesData[2], expensesData[0]]);
});

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };

  const results = selectExpenses(expensesData, filters);
  expect(results).toEqual([expensesData[2], expensesData[0]]);
});

test('Should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0),
  };

  const results = selectExpenses(expensesData, filters);
  expect(results).toEqual([expensesData[0], expensesData[1]]);
});

test('Should filter by sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };

  const results = selectExpenses(expensesData, filters);
  expect(results).toEqual([expensesData[2], expensesData[0], expensesData[1]]);
});

test('Should filter by sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };

  const results = selectExpenses(expensesData, filters);
  expect(results).toEqual([expensesData[1], expensesData[0], expensesData[2]]);
});

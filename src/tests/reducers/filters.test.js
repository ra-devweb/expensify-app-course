import moment from 'moment';

import filterReducer from '../../reducers/filters';

test('Should setup default filter value', () => {
  const state = filterReducer(undefined, { type: '@@init' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sort by date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });

  expect(state.sortBy).toBe('date');
});

test('should set sort by amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

test('Should set filter by text', () => {
  const state = filterReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'Rent',
  });

  expect(state.text).toBe('Rent');
});

test('Should set filter by start date', () => {
  const startDate = moment();
  const state = filterReducer(undefined, {
    type: 'SET_START_DATE',
    startDate,
  });

  expect(state.startDate).toEqual(startDate);
});

test('Should set filter by end date', () => {
  const endDate = moment();
  const state = filterReducer(undefined, {
    type: 'SET_END_DATE',
    endDate,
  });

  expect(state.endDate).toEqual(endDate);
});

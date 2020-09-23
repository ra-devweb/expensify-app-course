import addExpensesTotal from '../../selectors/addExpensesTotal';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const result = addExpensesTotal([]);
  expect(result).toBe(0);
});

test('Should correctly add up single expense', () => {
  const result = addExpensesTotal([expenses[0]]);
  expect(result).toBe(3500);
});

test('Should correctly and up multiple expenses', () => {
  const results = addExpensesTotal(expenses);
  expect(results).toBe(8500);
});

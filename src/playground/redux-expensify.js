/* store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expensify, state.filters);

  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: 'Maroc Telecom',
    note: 'Payer factorization',
    createdAt: 1000,
    amount: 3000,
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'Orange',
    note: 'Payer factorization',
    createdAt: 2000,
    amount: 2000,
  })
);

store.dispatch(deleteExpense({ id: expenseOne.expense.id }));

store.dispatch(updateExpense(expenseTwo.expense.id, { description: 'Inwi' }));

store.dispatch(setTextFilter());
store.dispatch(setTextFilter('Me'));

store.dispatch(sortByAmount());
store.dispatch(setTextFilter('Orange'));

store.dispatch(setStartDate(123));
store.dispatch(setStartDate(2001));
store.dispatch(setEndDate(1230)); */

store.dispatch(sortByAmount());

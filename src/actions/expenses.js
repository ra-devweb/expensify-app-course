import database from '../firebase/firebase';

// Add expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// Delete expense
export const deleteExpense = ({ id } = {}) => ({ type: 'DELETE_EXPENSE', id });

// Update expense
export const updateExpense = (id, update) => ({
  type: 'UPDATE_EXPENSE',
  id,
  update,
});

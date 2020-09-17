// Expense default state param
const expensifyDefaultState = [];

// Expensify reducer
export default (state = expensifyDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'DELETE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

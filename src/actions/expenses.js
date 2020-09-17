import { v4 as uuidv4 } from 'uuid';

// Add expense
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

// Delete expense
export const deleteExpense = ({ id } = {}) => ({ type: 'DELETE_EXPENSE', id });

// Update expense
export const updateExpense = (id, update) => ({
  type: 'UPDATE_EXPENSE',
  id,
  update,
});

import React from 'react';

import ExpensesList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const DashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);

export default DashboardPage;

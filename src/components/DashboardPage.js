import React from 'react';

import ExpensesList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesSummary />
    <ExpensesList />
  </div>
);

export default DashboardPage;

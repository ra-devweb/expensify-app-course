import React from 'react';

import ExpensesList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);

export default DashboardPage;

import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should rendering ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary />);

  expect(wrapper).toMatchSnapshot();
});

test('Should rendering ExpensesSummary correctly with single expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={255} />
  );

  expect(wrapper).toMatchSnapshot();
});

test('Should rendering ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={3} expensesTotal={255366777} />
  );

  expect(wrapper).toMatchSnapshot();
});

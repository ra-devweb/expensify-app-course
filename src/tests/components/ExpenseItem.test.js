import React from 'react';
import { shallow } from 'enzyme';

import ExpenseItem from '../../components/ExpenseItem';
import expenses from '../fixtures/expenses';

test('Should render expense item component correctly', () => {
  const wrapper = shallow(<ExpenseItem {...expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense form correctly with expenses', () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
  const value = 'description';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('#description').simulate('change', {
    target: { value },
  });

  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set note on textArea change', () => {
  const value = 'New note';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: { value },
  });

  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set amount if valid input', () => {
  const value = '23.5';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set invalid amount input', () => {
  const value = '23.533';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();

  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error')).toBe('');

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
  });
});

test('Should set date on new date change', () => {
  const now = moment();

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('#date').prop('onDateChange')(now);

  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calender focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('#date').prop('onFocusChange')({ focused });

  expect(wrapper.state('calendarFocused')).toBe(true);
});

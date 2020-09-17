import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilter } from '../../components/ExpenseListFilters';
import { filter, altFilter } from '../fixtures/filters';

let setStartDate,
  setEndDate,
  onFocusChange,
  setTextFilter,
  sortByDate,
  sortByAmount,
  wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      filters={filter}
    />
  );
});

test('Should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense list with alt filters data correctly', () => {
  wrapper.setProps({ filters: altFilter });
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  const value = 'Rent';
  wrapper.find('input').simulate('change', {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenCalled();
});

test('Should sort by date', () => {
  const value = 'date';
  wrapper.setProps({ filters: altFilter });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle change by date', () => {
  const startDate = moment(0).add(3, 'years');
  const endDate = moment(0).add(6, 'years');

  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate,
    endDate,
  });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus change', () => {
  const focusedInput = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(
    focusedInput
  );
  expect(wrapper.state('focusedInput')).toBe(focusedInput);
});

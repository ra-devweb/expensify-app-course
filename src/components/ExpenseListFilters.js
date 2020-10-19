import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilter extends React.Component {
  state = {
    focusedInput: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (focusedInput) => {
    this.setState(() => ({
      focusedInput,
    }));
  };

  onTextChange = (e) => this.props.setTextFilter(e.target.value);

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className='filters'>
        <div className='container'>
          <div className='form text-center'>
            <div className='form__group'>
              <input
                className='form__input'
                placeholder='Search expenses'
                type='text'
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div className='form__group'>
              <select 
                className='form__select'
                value={this.props.filters.sortBy} onChange={this.onSortChange}
                >
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
              </select>
            </div>
            <div className='form__group'>
              <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId='startDateId'
                endDate={this.props.filters.endDate}
                endDateId='endDateId'
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);

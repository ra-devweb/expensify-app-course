import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onChangeDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onChangeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onChangeAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onChangeDate = (createdAt) => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.*',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        <div className='summary'>
          <h2 className='text-center summary__title'>{this.props.expense ? `Update expense ${this.state.description}` : 'Add new expense'}</h2>
        </div>
        <div className='container'>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <form onSubmit={this.onSubmitForm} className='form form--column'>
          <div className='form__group form__group--unset'>
            <label htmlFor='description'>Description</label>
            <input
              className='form__input'
              type='text'
              id='description'
              placeholder='Description'
              value={this.state.description}
              onChange={this.onChangeDescription}
              autoFocus
            />
          </div>
          <div className='form__group form__group--unset'>
            <label htmlFor='amount'>Amount</label>
            <input
              className='form__input'
              id='amount'
              type='text'
              placeholder='Amount'
              value={this.state.amount}
              onChange={this.onChangeAmount}
            />
          </div>
          <div className='form__group form__group--unset'>
            <label htmlFor='date'>Pick date</label>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onChangeDate}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              block={() => true}
            />
          </div>
          <div className='form__group form__group--unset'>
            <label htmlFor='note'>Note (Optional)</label>
            <textarea
              className='form__area'
              id='note'
              placeholder='Add a note for expense'
              value={this.state.note}
              onChange={this.onChangeNote}
            ></textarea>
          </div>
          <button style={{marginBottom: '2rem'}} className='btn btn--primary'>{this.props.expense ? 'Update expense' : 'Add expense'}</button>
        </form>
      </div>
      </div>
    );
  }
}

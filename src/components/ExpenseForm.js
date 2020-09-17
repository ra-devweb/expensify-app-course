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
        error: 'Please provide description and amount.',
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              id='description'
              placeholder='Description'
              value={this.state.description}
              onChange={this.onChangeDescription}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor='amount'>Amount</label>
            <input
              id='amount'
              type='text'
              placeholder='Amount'
              value={this.state.amount}
              onChange={this.onChangeAmount}
            />
          </div>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onChangeDate}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <div>
            <label htmlFor='note'>Note (Optional)</label>
            <textarea
              id='note'
              placeholder='Add a note for expense'
              value={this.state.note}
              onChange={this.onChangeNote}
            ></textarea>
          </div>
          <button>Add expense</button>
        </form>
      </div>
    );
  }
}

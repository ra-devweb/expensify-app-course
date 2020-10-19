import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'dr', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'MAD',
  },
});

numeral.locale('dr');

const ExpenseItem = ({ id, description, amount, createdAt }) => {
  return (
      <Link className='list-body' to={`/edit/${id}`}>
        <div>
          <h1 className='list-title'>{description}</h1>
          <span className='list-date'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
          <h3 className='list-amount'>{numeral(amount / 100).format('0,0.00 $')}</h3>
      </Link>
  );
};

export default ExpenseItem;

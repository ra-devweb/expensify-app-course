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
    <div>
      <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
      </Link>
      <p>{numeral(amount / 100).format('0,0.00 $')}</p>
      <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
  );
};

export default ExpenseItem;

import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Rent',
    note: '',
    amount: 3500,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Gaz',
    note: '',
    amount: 4500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Water',
    note: '',
    amount: 500,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];

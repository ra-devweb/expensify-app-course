import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Gaz bill',
    note: 'Done!',
    amount: 200,
    createdAt: 3000,
  })
);

store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'Done!',
    amount: 3200,
    createdAt: 2000,
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    note: 'Done!',
    amount: 3600,
    createdAt: 4000,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

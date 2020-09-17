import { createStore } from 'redux';

const countIncrement = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const countDecrement = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const countReset = () => ({
  type: 'RESET',
});

const countSet = () => ({ type: 'SET' });

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return { count: 101 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(countIncrement());
store.dispatch(countIncrement({ incrementBy: 10 }));

store.dispatch(countDecrement());
store.dispatch(countDecrement({ decrementBy: 5 }));

store.dispatch(countReset());

store.dispatch(countSet());

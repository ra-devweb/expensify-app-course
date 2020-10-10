import authReducer from '../../reducers/auth';

test('Should setup default auth object value', () => {
  const state = authReducer(undefined, { type: '@@init' });

  expect(state).toEqual({});
});

test('Should set uid for login', () => {
  const uid = 'ABC123456';
  const state = authReducer({}, { type: 'LOGIN', uid });

  expect(state).toEqual({
    uid,
  });
});

test('Should clear uid for logout', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });

  expect(state).toEqual({});
});

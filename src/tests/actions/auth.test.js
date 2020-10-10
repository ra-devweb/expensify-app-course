import { login, logout } from '../../actions/auth';

test('Should setup login with user id', () => {
  const uid = 'abc1234556';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('Should setup logout', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT',
  });
});

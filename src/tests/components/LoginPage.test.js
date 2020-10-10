import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

test('Should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage login={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should startLogin on click button', () => {
  const login = jest.fn();
  const wrapper = shallow(<LoginPage login={login} />);

  wrapper.find('button').simulate('click');

  expect(login).toHaveBeenCalled();
});

import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

test('Should render Header component correctly', () => {
  const wrapper = shallow(<Header logOut={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should startLogout on click button', () => {
  const logOut = jest.fn();
  const wrapper = shallow(<Header logOut={logOut} />);
  wrapper.find('button').simulate('click');
  expect(logOut).toHaveBeenCalled();
});

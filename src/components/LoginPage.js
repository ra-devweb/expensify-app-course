import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ login }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expensify application</h1>
      <p className='box-layout__paragraph'>It's time to get your expenses under control</p>
      <button className='box-layout__button btn' onClick={login}><img src='/images/google.svg' className='btn__google' />Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

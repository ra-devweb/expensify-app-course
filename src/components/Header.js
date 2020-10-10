import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = ({ logOut }) => (
  <header>
    <h1>Expensify</h1>

    <nav>
      <ul>
        <li>
          <NavLink to='/dashboard' activeClassName='is-active'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/Create' activeClassName='is-active'>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to='/help' activeClassName='is-active'>
            Help
          </NavLink>
        </li>
      </ul>
      <button onClick={logOut}>Logout</button>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);

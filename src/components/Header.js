import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';
import { history } from '../routes/AppRouter';

export const Header = ({ logOut }) => (
  <header className='header'>
    <div className='container'>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>

            { history.location.pathname === '/dashboard' ? '' : <span className='navigation__go-back' onClick={() => history.goBack()}>&#10229;</span>}

            &nbsp;
            
            <Link className='navigation__link' to='/dashboard'>
              <h1 className='navigation__logo'>Expensify</h1>
            </Link>
          </li>
        </ul>
        <button className='navigation__logout btn-small btn-small--back-h' onClick={logOut}>Logout</button>
      </nav>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);

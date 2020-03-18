import React from 'react';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser, getAuthoriationStatus} from '../../reducer/user/selectors.js';

const Header = (props) => {
  const {userData, authorizationStatus} = props;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">
                  {authorizationStatus === AuthorizationStatus.AUTH ? userData.email : `Sign in`}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    superStar: PropTypes.bool
  }),
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  userData: getUser(state),
  authorizationStatus: getAuthoriationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);

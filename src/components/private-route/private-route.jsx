import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  const {render, path, require, to, exact} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          require ? render(props) : <Redirect to={to} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  require: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default PrivateRoute;

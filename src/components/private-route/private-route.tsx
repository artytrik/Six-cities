import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';

interface Props {
  render: () => React.ReactNode;
  require: boolean;
  to: string;
  exact: boolean;
  path: string;
}


const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {render, path, require, to, exact} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          require ? render() : <Redirect to={to} />
        );
      }}
    />
  );
};

export default PrivateRoute;

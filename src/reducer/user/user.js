import {extend} from '../../utils';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER: `GET_USER`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  getUser: (userData) => ({
    type: ActionType.GET_USER,
    payload: userData
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.GET_USER:
      return extend(state, {
        userData: action.payload
      });
  }

  return state;
};

export {ActionCreator, ActionType, AuthorizationStatus, reducer};

import {reducer, ActionCreator, ActionType, AuthorizationStatus} from './user';

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  superStar: false,
  name: `Oliver.conner`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {}
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {}
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userData: {}
  });
});

it(`Reducer should change userData by getting user`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    userData: {}
  }, {
    type: ActionType.GET_USER,
    payload: user,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userData: user
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for getting user returns correct action`, () => {
    expect(ActionCreator.getUser(user)).toEqual({
      type: ActionType.GET_USER,
      payload: user,
    });
  });
});

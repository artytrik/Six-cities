import {Operation} from './operation.js';
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../api.js";
import {ActionType as DataActionType} from './data/data.js';
import {ActionType as AppActionType} from './app/app.js';
import {ActionType as UserActionType, AuthorizationStatus} from './user/user.js';

const api = createAPI(() => {});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, []);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.LOAD_OFFERS,
          payload: [],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.GET_CITIES,
          payload: [],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: AppActionType.CHANGE_CITY,
          payload: ``,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews({id: 1});

    apiMock
      .onGet(`/comments/1`)
      .reply(200, []);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: DataActionType.LOAD_REVIEWS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = Operation.loadNearbyOffers({id: 1});

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, []);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: DataActionType.LOAD_NEARBY_OFFERS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, AuthorizationStatus.AUTH);

    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserActionType.GET_USER,
          payload: {},
        });
      });
  });
});

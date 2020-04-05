import ModelOffer from '../models/model-offer';
import ModelReview from '../models/model-review';
import ModelUser from '../models/model-user';
import {ActionCreator as DataActionCreator} from './data/data';
import {ActionCreator as AppActionCreator} from './app/app';
import {ActionCreator as UserActionCreator, AuthorizationStatus} from './user/user';
import {ActionCreator as ReviewActionCreator, LoadingStatus} from './review/review';
import {ActionCreator as FavoritesActionCreator} from './favorite/favorite';
import {ServerRoute} from '../utils';

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(ServerRoute.HOTELS)
      .then((response) => {
        const offers = ModelOffer.parseOffers(response.data);
        dispatch(DataActionCreator.loadOffers(offers));
        dispatch(DataActionCreator.getCities(offers));
        dispatch(AppActionCreator.changeCity(offers.length > 0 ? offers[0].city : ``));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(ServerRoute.getComments(id))
      .then((response) => {
        const reviews = ModelReview.parseReviews(response.data);
        dispatch(DataActionCreator.loadReviews(reviews));
      });
  },
  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(ServerRoute.getNearbyOffers(id))
      .then((response) => {
        const nearbyOffers = ModelOffer.parseOffers(response.data);
        dispatch(DataActionCreator.loadNearbyOffers(nearbyOffers));
      });
  },
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(ServerRoute.LOGIN)
      .then((response) => {
        const user = ModelUser.parseUser(response.data);
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.getUser(user));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(ServerRoute.LOGIN, {
      email: authData.login,
      password: authData.password
    })
      .then((response) => {
        const user = ModelUser.parseUser(response.data);
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.getUser(user));
      });
  },
  postReview: (reviewData, id) => (dispatch, getState, api) => {
    dispatch(ReviewActionCreator.changeLoadingStatus(LoadingStatus.DISABLED));
    return api.post(ServerRoute.getComments(id), reviewData)
      .then((response) => {
        dispatch(ReviewActionCreator.changeLoadingStatus(LoadingStatus.SUCCESS));
        const reviews = ModelReview.parseReviews(response.data);
        dispatch(DataActionCreator.loadReviews(reviews));
      })
      .catch((err) => {
        dispatch(ReviewActionCreator.changeLoadingStatus(LoadingStatus.FAILED));
        throw err;
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(ServerRoute.FAVORITE)
      .then((response) => {
        const offers = ModelOffer.parseOffers(response.data);
        dispatch(FavoritesActionCreator.loadFavorites(offers));
      });
  },
  addFavorite: (id) => (dispatch, getState, api) => {
    const status = 1;
    return api.post(ServerRoute.getFavorite(id, status), {
      'hotel_id': id,
      status
    })
      .then((response) => {
        const offer = ModelOffer.parseOffer(response.data);
        dispatch(FavoritesActionCreator.addFavorite(offer));
        dispatch(DataActionCreator.replaceOffer(offer));
      });
  },
  removeFavorite: (id) => (dispatch, getState, api) => {
    const status = 0;
    return api.post(ServerRoute.getFavorite(id, status), {
      'hotel_id': id,
      status
    })
      .then((response) => {
        const offer = ModelOffer.parseOffer(response.data);
        dispatch(FavoritesActionCreator.removeFavorite(offer));
        dispatch(DataActionCreator.replaceOffer(offer));
      });
  }
};

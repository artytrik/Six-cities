import ModelOffer from '../model-offer.js';
import ModelReview from '../model-review.js';
import ModelUser from '../model-user.js';
import {ActionCreator as DataActionCreator} from './data/data.js';
import {ActionCreator as AppActionCreator} from './app/app.js';
import {ActionCreator as UserActionCreator, AuthorizationStatus} from './user/user.js';
import {ActionCreator as ReviewActionCreator, LoadingStatus} from './review/review.js';
import {ActionCreator as FavoritesActionCreator} from './favorite/favorite.js';

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = ModelOffer.parseOffers(response.data);
        dispatch(DataActionCreator.loadOffers(offers));
        dispatch(DataActionCreator.getCities(offers));
        dispatch(AppActionCreator.changeCity(offers.length > 0 ? offers[0].city : ``));
      });
  },
  loadReviews: (activeOffer) => (dispatch, getState, api) => {
    return api.get(`/comments/${activeOffer}`)
      .then((response) => {
        const reviews = ModelReview.parseReviews(response.data);
        dispatch(DataActionCreator.loadReviews(reviews));
      });
  },
  loadNearbyOffers: (activeOffer) => (dispatch, getState, api) => {
    return api.get(`/hotels/${activeOffer}/nearby`)
      .then((response) => {
        const nearbyOffers = ModelOffer.parseOffers(response.data);
        dispatch(DataActionCreator.loadNearbyOffers(nearbyOffers));
      });
  },
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
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
    return api.post(`/login`, {
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
    return api.post(`/comments/${id}`, reviewData)
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
    return api.get(`/favorite`)
      .then((response) => {
        const offers = ModelOffer.parseOffers(response.data);
        dispatch(FavoritesActionCreator.loadFavorites(offers));
      });
  },
  addFavorite: (id) => (dispatch, getState, api) => {
    const status = 1;
    return api.post(`favorite/${id}/${status}`, {
      'hotel_id': id,
      status
    })
      .then((response) => {
        const offer = ModelOffer.parseOffer(response.data);
        dispatch(FavoritesActionCreator.addFavorite(offer));
      });
  },
  removeFavorite: (id) => (dispatch, getState, api) => {
    const status = 0;
    return api.post(`favorite/${id}/${status}`, {
      'hotel_id': id,
      status
    })
      .then((response) => {
        const offer = ModelOffer.parseOffer(response.data);
        dispatch(FavoritesActionCreator.removeFavorite(offer));
      });
  }
};

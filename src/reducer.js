import {extend} from './utils.js';
import {SortType} from './utils.js';
import ModelOffer from './model-offer.js';
import ModelReview from './model-review.js';

const initialState = {
  city: ``,
  cities: ``,
  offers: [],
  currentOffers: ``,
  currentSortType: SortType.POPULAR,
  currentCard: null,
  activeOffer: null,
  reviews: [],
  nearbyOffers: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_CURRENT_CARD: `SET_CURRENT_CARD`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: null
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  setCurrentCard: (offer) => ({
    type: ActionType.SET_CURRENT_CARD,
    payload: offer
  }),
  changeActiveOffer: (offer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offer
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = ModelOffer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreator.changeCity(offers[0].city));
      });
  },
  loadReviews: (activeOffer) => (dispatch, getState, api) => {
    return api.get(`/comments/${activeOffer.id}`)
      .then((response) => {
        const reviews = ModelReview.parseReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
  loadNearbyOffers: (activeOffer) => (dispatch, getState, api) => {
    return api.get(`/hotels/${activeOffer.id}/nearby`)
      .then((response) => {
        const nearbyOffers = ModelOffer.parseOffers(response.data);
        dispatch(ActionCreator.loadNearbyOffers(nearbyOffers));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: state.offers
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });
    case ActionType.SET_CURRENT_CARD:
      return extend(state, {
        currentCard: action.payload
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

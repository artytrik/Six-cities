import {extend} from '../../utils.js';
import {getUniqueCities} from '../../utils.js';

const initialState = {
  offers: [],
  reviews: [],
  nearbyOffers: [],
  cities: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  REPLACE_OFFER: `REPLACE_OFFER`
};

const ActionCreator = {
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
  }),
  getCities: (offers) => ({
    type: ActionType.GET_CITIES,
    payload: offers
  }),
  replaceOffer: (offer) => ({
    type: ActionType.REPLACE_OFFER,
    payload: offer
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.GET_CITIES:
      return extend(state, {
        cities: getUniqueCities(action.payload)
      });
    case ActionType.REPLACE_OFFER:
      const offers = state.offers;
      const index = offers.findIndex((it) => it.id === action.payload.id);
      const length = offers.length;
      const offersLeft = index === 0 ? [] : offers.slice(0, index);
      const offersRight = index === length - 1 ? [] : offers.slice(index + 1, length);

      return extend(state, {
        offers: offersLeft.concat(action.payload).concat(offersRight)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

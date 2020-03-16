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
  GET_CITIES: `GET_CITIES`
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

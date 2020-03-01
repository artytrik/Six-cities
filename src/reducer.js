import {extend} from './utils.js';
import {offers} from './mocks/offers.js';
import {SortType} from './utils.js';

const getOffersByCity = (city, allOffers) =>
  allOffers.filter((offer) => offer.city === city);

const getCities = () => {
  const cities = new Set();
  offers.forEach((offer) => {
    cities.add(offer.city);
  });

  const maxCities = [...cities].slice(0, 6);

  return maxCities;
};

const initialState = {
  city: offers[0].city,
  cities: getCities(),
  offers,
  currentOffers: getOffersByCity(offers[0].city, offers),
  currentSortType: SortType.POPULAR,
  currentCard: null,
  activeOffer: null
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_CURRENT_CARD: `SET_CURRENT_CARD`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
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
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: getOffersByCity(action.payload, state.offers)
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

import {extend} from './utils.js';
import {offers} from './mocks/offers.js';

const getOffersByCity = (city, offers) =>
  offers.filter((offer) => offer.city === city);

const getCities = () => {
  const cities = new Set();
  offers.forEach((offer) => {
    cities.add(offer.city);
  });

  const maxCities = [...cities].slice(0, 6);

  return maxCities;
};

const initialState = {
  city: `Amsterdam`,
  cities: getCities(),
  offers,
  currentOffers: getOffersByCity(`Amsterdam`, offers)
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: null
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
        currentOffers: getOffersByCity(state.city, state.offers)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

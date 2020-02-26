import {extend} from './utils.js';
import {offers} from './mocks/offers.js';

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
  currentOffers: getOffersByCity(offers[0].city, offers)
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
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

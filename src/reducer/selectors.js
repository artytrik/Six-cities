import {createSelector} from 'reselect';
import {getOffers} from './data/selectors.js';
import {getActiveCity} from './app/selectors.js';

export const getOffersByCity = createSelector(
    getActiveCity,
    getOffers,
    (city, allOffers) =>
      allOffers.filter((offer) => offer.city === city)
);

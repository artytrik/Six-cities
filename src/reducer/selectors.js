import {createSelector} from 'reselect';
import {getOffers} from './data/selectors.js';
import {getActiveCity, getActiveOffer as getActiveOfferId} from './app/selectors.js';

export const getOffersByCity = createSelector(
    getActiveCity,
    getOffers,
    (city, allOffers) =>
      allOffers.filter((offer) => offer.city === city)
);

export const getActiveOffer = createSelector(
    getOffers,
    getActiveOfferId,
    (offers, activeOfferId) => {
      return offers.find((offer) => offer.id === activeOfferId);
    }
);

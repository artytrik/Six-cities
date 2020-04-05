import NameSpace from '../name-space';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCities = (state) => state[NameSpace.DATA].cities;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;

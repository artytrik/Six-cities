import NameSpace from '../name-space.js';

export const getSortType = (state) => state[NameSpace.APP].currentSortType;
export const getActiveCity = (state) => state[NameSpace.APP].city;
export const getCurrentCard = (state) => state[NameSpace.APP].currentCard;
export const getActiveOffer = (state) => state[NameSpace.APP].activeOffer;

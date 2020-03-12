import {extend} from '../../utils.js';
import {SortType} from '../../utils.js';

const initialState = {
  city: ``,
  currentSortType: SortType.POPULAR,
  currentCard: null,
  activeOffer: null
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_CURRENT_CARD: `SET_CURRENT_CARD`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
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

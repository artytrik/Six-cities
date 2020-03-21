import {extend} from '../../utils.js';

const initialState = {
  favorites: []
};

const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  ADD_FAVORITE: `SET_FAVORITE`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`
};

const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  }),
  addFavorite: (offer) => ({
    type: ActionType.LOAD_FAVORITE,
    payload: offer
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorites: action.payload
      });
    case ActionType.ADD_FAVORITE:
      return extend(state, {
        favorites: [action.payload, ...state.favorites]
      });
    case ActionType.REMOVE_FAVORITE:
      return extend(state, {
        favorites: state.favorites.filter((offer) => offer.id !== action.payload)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

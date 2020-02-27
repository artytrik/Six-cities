import {reducer, ActionType, ActionCreator} from './reducer.js';
import {SortType} from './utils.js';
import {offers} from './mocks/offers.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  });
});

it(`Reducer should change city by a given city`, () => {
  expect(reducer({
    city: offers[0].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Moscow`,
  })).toEqual({
    city: `Moscow`,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  });
});

it(`Reducer should get offers by a given offers`, () => {
  expect(reducer({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  }, {
    type: ActionType.GET_OFFERS,
    payload: offers[2].city,
  })).toEqual({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[2]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  });
});

it(`Reducer should change sort type by a given sort type`, () => {
  expect(reducer({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[2]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: SortType.PRICE_HIGH_TO_LOW,
  })).toEqual({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[2]],
    currentSortType: SortType.PRICE_HIGH_TO_LOW,
    currentCard: null
  });
});

it(`Reducer should set current card by a given offer`, () => {
  expect(reducer({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[2]],
    currentSortType: SortType.POPULAR,
    currentCard: null
  }, {
    type: ActionType.SET_CURRENT_CARD,
    payload: offers[1],
  })).toEqual({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[2]],
    currentSortType: SortType.POPULAR,
    currentCard: offers[1]
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Moscow`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Moscow`
    });
  });

  it(`Action creator for getting offers returns correct action`, () => {
    expect(ActionCreator.getOffers([offers[0], offers[1]])).toEqual({
      type: ActionType.GET_OFFERS,
      payload: [offers[0], offers[1]]
    });
  });

  it(`Action creator for changing sort type returns correct action`, () => {
    expect(ActionCreator.changeSortType(SortType.PRICE_HIGH_TO_LOW)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortType.PRICE_HIGH_TO_LOW
    });
  });

  it(`Action creator for setting current card returns correct action`, () => {
    expect(ActionCreator.setCurrentCard(offers[0])).toEqual({
      type: ActionType.SET_CURRENT_CARD,
      payload: offers[0]
    });
  });
});

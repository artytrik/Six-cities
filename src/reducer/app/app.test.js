import {reducer, ActionType, ActionCreator} from './app.js';
import {SortType} from '../../utils.js';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    city: `Amsterdam`,
    type: `Apartment`,
    bedrooms: 3,
    adults: 4,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    gallery: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    rating: 4.8,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    inside: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    name: `Wood and stone place`,
    city: `Moscow`,
    type: `Private room`,
    bedrooms: 1,
    adults: 2,
    price: 80,
    picture: `img/room.jpg`,
    premium: false,
    gallery: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    rating: 4.8,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    inside: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    name: `Canal View Prinsengracht`,
    city: `Vladivostok`,
    type: `Apartment`,
    bedrooms: 2,
    adults: 3,
    price: 132,
    picture: `img/apartment-02.jpg`,
    premium: false,
    gallery: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    rating: 4.8,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    inside: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    city: `Amsterdam`,
    type: `Apartment`,
    bedrooms: 3,
    adults: 5,
    price: 180,
    picture: `img/apartment-03.jpg`,
    premium: true,
    gallery: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    rating: 4.8,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    inside: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.3809553943508, 4.939309666406198]
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
  });
});

it(`Reducer should change city by a given city`, () => {
  expect(reducer({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Moscow`,
  })).toEqual({
    city: `Moscow`,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  });
});

it(`Reducer should change sort type by a given sort type`, () => {
  expect(reducer({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: SortType.PRICE_HIGH_TO_LOW,
  })).toEqual({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.PRICE_HIGH_TO_LOW,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  });
});

it(`Reducer should set current card by a given offer`, () => {
  expect(reducer({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  }, {
    type: ActionType.SET_CURRENT_CARD,
    payload: offers[0],
  })).toEqual({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: offers[0],
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  });
});

it(`Reducer should change active offer by a given offer`, () => {
  expect(reducer({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offers[0],
  })).toEqual({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: offers[0],
    reviews: [],
    nearbyOffers: []
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Moscow`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Moscow`
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

  it(`Action creator for changing active offer returns correct action`, () => {
    expect(ActionCreator.changeActiveOffer(offers[0])).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: offers[0]
    });
  });
});

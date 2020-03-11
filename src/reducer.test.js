import {reducer, ActionType, ActionCreator, Operation} from './reducer.js';
import MockAdapter from "axios-mock-adapter";
import {SortType} from './utils.js';
import {createAPI} from "./api.js";

const api = createAPI(() => {});

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

const reviews = [
  {
    id: 1,
    date: new Date(2020, 3, 17),
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
    },
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by
    the unique lightness of Amsterdam. The building is green and
    from 18th century.`
  }
];

const nearbyOffers = [
  {
    name: `Beatiful flat`,
    type: `Apartment`,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    rating: 4,
    coordinates: [52.369553943508, 4.85309666406198]
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
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

it(`Reducer should update offers by load offers`, () => {
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
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })).toEqual({
    city: ``,
    cities: [],
    offers,
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers: []
  });
});

it(`Reducer should update reviews by load reviews`, () => {
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
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })).toEqual({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews,
    nearbyOffers: []
  });
});

it(`Reducer should update nearby offers by load nearby offers`, () => {
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
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearbyOffers,
  })).toEqual({
    city: ``,
    cities: [],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
    reviews: [],
    nearbyOffers
  });
});

it(`Reducer should get cities from loaded offers`, () => {
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
    type: ActionType.GET_CITIES,
    payload: offers,
  })).toEqual({
    city: ``,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers: [],
    currentSortType: SortType.POPULAR,
    currentCard: null,
    activeOffer: null,
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

  it(`Action creator for loading offers return correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for loading reviews offer returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    });
  });

  it(`Action creator for loading nearby offers returns correct action`, () => {
    expect(ActionCreator.loadNearbyOffers(nearbyOffers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: nearbyOffers
    });
  });

  it(`Action creator for getting cities returns correct action`, () => {
    expect(ActionCreator.getCities(offers)).toEqual({
      type: ActionType.GET_CITIES,
      payload: offers
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, []);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_CITIES,
          payload: [],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_CITY,
          payload: ``,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews({id: 1});

    apiMock
      .onGet(`/comments/1`)
      .reply(200, []);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_REVIEWS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = Operation.loadNearbyOffers({id: 1});

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, []);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [],
        });
      });
  });
});

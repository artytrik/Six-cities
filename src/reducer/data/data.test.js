import {reducer, ActionType, ActionCreator} from './data.js';
import {SortType} from '../../utils.js';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    city: `Amsterdam`,
    type: `apartment`,
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
    features: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
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
    type: `room`,
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
    features: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
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
    type: `apartment`,
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
    features: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
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
    type: `apartment`,
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
    features: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
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
    type: `apartment`,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    rating: 4,
    coordinates: [52.369553943508, 4.85309666406198]
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities: [],
    offers: [],
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

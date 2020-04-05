import {reducer, ActionCreator, ActionType} from './favorite';

const offers = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    city: `Amsterdam`,
    type: `apartment`,
    bedrooms: 3,
    adults: 4,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    favorite: false,
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
    id: 2,
    name: `Wood and stone place`,
    city: `Moscow`,
    type: `room`,
    bedrooms: 1,
    adults: 2,
    price: 80,
    picture: `img/room.jpg`,
    premium: false,
    favorite: false,
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
    id: 3,
    name: `Canal View Prinsengracht`,
    city: `Vladivostok`,
    type: `apartment`,
    bedrooms: 2,
    adults: 3,
    price: 132,
    picture: `img/apartment-02.jpg`,
    premium: false,
    favorite: false,
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
    id: 4,
    name: `Nice, cozy, warm big bed apartment`,
    city: `Amsterdam`,
    type: `apartment`,
    bedrooms: 3,
    adults: 5,
    price: 180,
    picture: `img/apartment-03.jpg`,
    premium: true,
    favorite: false,
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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    favorites: []
  });
});

it(`Reducer should change favorites by a given value`, () => {
  expect(reducer({
    favorites: []
  }, {
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  })).toEqual({
    favorites: offers
  });
});

it(`Reducer should add favorite by a given value`, () => {
  expect(reducer({
    favorites: offers
  }, {
    type: ActionType.ADD_FAVORITE,
    payload: offers[0]
  })).toEqual({
    favorites: [offers[0], ...offers]
  });
});

it(`Reducer should remove favorite by a given value`, () => {
  expect(reducer({
    favorites: offers
  }, {
    type: ActionType.REMOVE_FAVORITE,
    payload: offers[0]
  })).toEqual({
    favorites: [offers[1], offers[2], offers[3]]
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loading favorites return correct action`, () => {
    expect(ActionCreator.loadFavorites(offers)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: offers
    });
  });

  it(`Action creator for adding favorite return correct action`, () => {
    expect(ActionCreator.addFavorite(offers[0])).toEqual({
      type: ActionType.ADD_FAVORITE,
      payload: offers[0]
    });
  });

  it(`Action creator for removing favorite return correct action`, () => {
    expect(ActionCreator.removeFavorite(offers[0])).toEqual({
      type: ActionType.REMOVE_FAVORITE,
      payload: offers[0]
    });
  });
});

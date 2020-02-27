import {reducer, ActionType, ActionCreator} from './reducer.js';

const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    name: `Beautiful & luxurious apartment at great location`,
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
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-04-24`
      },
      {
        id: 2,
        name: `Alex`,
        avatar: `img/avatar-max.jpg`,
        rating: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-03-24`
      },
      {
        id: 3,
        name: `John`,
        avatar: `img/avatar-max.jpg`,
        rating: 5,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-02-24`
      }
    ],
    nearbyOffers: [
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.369553943508, 4.85309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3909553943508, 4.929309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3809553943508, 4.939309666406198]
      },
    ]
  },
  {
    id: 2,
    city: `Amsterdam`,
    name: `Wood and stone place`,
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
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-04-24`
      },
      {
        id: 2,
        name: `Alex`,
        avatar: `img/avatar-max.jpg`,
        rating: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-03-24`
      },
      {
        id: 3,
        name: `John`,
        avatar: `img/avatar-max.jpg`,
        rating: 5,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-02-24`
      }
    ],
    nearbyOffers: [
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.369553943508, 4.85309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3909553943508, 4.929309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3809553943508, 4.939309666406198]
      },
    ]
  },
  {
    id: 3,
    city: `Moscow`,
    name: `Canal View Prinsengracht`,
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
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-04-24`
      },
      {
        id: 2,
        name: `Alex`,
        avatar: `img/avatar-max.jpg`,
        rating: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-03-24`
      },
      {
        id: 3,
        name: `John`,
        avatar: `img/avatar-max.jpg`,
        rating: 5,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-02-24`
      }
    ],
    nearbyOffers: [
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.369553943508, 4.85309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3909553943508, 4.929309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3809553943508, 4.939309666406198]
      },
    ]
  },
  {
    id: 4,
    city: `Vladivostok`,
    name: `Nice, cozy, warm big bed apartment`,
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
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-04-24`
      },
      {
        id: 2,
        name: `Alex`,
        avatar: `img/avatar-max.jpg`,
        rating: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-03-24`
      },
      {
        id: 3,
        name: `John`,
        avatar: `img/avatar-max.jpg`,
        rating: 5,
        text: `A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.`,
        date: `2019-02-24`
      }
    ],
    nearbyOffers: [
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.369553943508, 4.85309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3909553943508, 4.929309666406198]
      },
      {
        name: `Beatiful flat`,
        type: `Apartment`,
        price: 120,
        picture: `img/apartment-01.jpg`,
        premium: true,
        rating: 4,
        coordinates: [52.3809553943508, 4.939309666406198]
      },
    ]
  },
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]]
  });
});

it(`Reducer should change city by a given city`, () => {
  expect(reducer({
    city: offers[0].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]]
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Moscow`,
  })).toEqual({
    city: `Moscow`,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]]
  });
});

it(`Reducer should get offers by a given offers`, () => {
  expect(reducer({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[0], offers[1]]
  }, {
    type: ActionType.GET_OFFERS,
    payload: offers[2].city,
  })).toEqual({
    city: offers[2].city,
    cities: [`Amsterdam`, `Moscow`, `Vladivostok`],
    offers,
    currentOffers: [offers[2]]
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
    expect(ActionCreator.getOffers(`Moscow`)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: `Moscow`
    });
  });
});
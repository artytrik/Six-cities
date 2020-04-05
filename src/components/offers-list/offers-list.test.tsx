import * as React from 'react';
import * as renderer from 'react-test-renderer';
import OffersList from './offers-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {BrowserRouter} from 'react-router-dom';
import {noop} from '../../utils';

const mockStore = configureStore([]);

const offers = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    city: `Amsterdam`,
    cityCoordinates: {
      location: [1, 1],
      zoom: 12
    },
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
      id: 1,
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    name: `Wood and stone place`,
    type: `room`,
    city: `Moscow`,
    cityCoordinates: {
      location: [2, 2],
      zoom: 12
    },
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
      id: 2,
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    type: `apartment`,
    city: `Amsterdam`,
    cityCoordinates: {
      location: [1, 1],
      zoom: 12
    },
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
      id: 3,
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    name: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    city: `Amsterdam`,
    cityCoordinates: {
      location: [1, 1],
      zoom: 12
    },
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
      id: 4,
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    coordinates: [52.3809553943508, 4.939309666406198]
  },
];

it(`OffersList should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <OffersList
              offers={offers}
              className="places"
              currentSortType={`Popular`}
              onCardHover={noop}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

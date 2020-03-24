import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const offers = [
  {
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
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
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
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
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
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
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
    coordinates: [52.3809553943508, 4.939309666406198]
  },
];

const city = `Amsterdam`;
const cities = [`Amsterdam`, `Moscow`, `Vladivostok`];

it(`App should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      userData: {},
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <App
        city={city}
        cities={cities}
        offers={offers}
        onCityClick={() => {}}
        onSortTypeClick={() => {}}
        currentSortType={`Popular`}
        onCardHover={() => {}}
        currentCard={null}
        authorizationStatus={`AUTH`}
        login={() => {}}
        loadingStatus={``}
        onLoadingStatusClear={() => {}}
        onReviewSubmit={() => {}}
      />
    </Provider>, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

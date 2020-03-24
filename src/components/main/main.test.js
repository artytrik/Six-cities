import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    rating: 4,
    coordinates: [1, 1]
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    picture: `img/room.jpg`,
    premium: false,
    rating: 4,
    coordinates: [2, 2]
  },
  {
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    picture: `img/apartment-02.jpg`,
    premium: false,
    rating: 4,
    coordinates: [3, 3]
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    picture: `img/apartment-03.jpg`,
    premium: true,
    rating: 4,
    coordinates: [4, 4]
  },
];

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  superStar: false,
  name: `Oliver.conner`
};

const city = `Amsterdam`;
const cities = [`Amsterdam`, `Moscow`, `Vladivostok`];

it(`Main should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      userData: user,
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Main
              city={city}
              offers={offers}
              cities={cities}
              onCityClick={() => {}}
              onSortTypeClick={() => {}}
              currentSortType={`Popular`}
              onCardHover={() => {}}
              currentCard={null}
            />
          </Provider>
        </BrowserRouter>
        , {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

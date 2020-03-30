import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

const offers = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    favorite: false,
    rating: 4
  },
  {
    id: 2,
    name: `Wood and stone place`,
    type: `room`,
    price: 80,
    picture: `img/room.jpg`,
    premium: false,
    favorite: false,
    rating: 4
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    type: `apartment`,
    price: 132,
    picture: `img/apartment-02.jpg`,
    premium: false,
    favorite: false,
    rating: 4
  },
  {
    id: 4,
    name: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    price: 180,
    picture: `img/apartment-03.jpg`,
    premium: true,
    favorite: false,
    rating: 4
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
              onCardHover={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

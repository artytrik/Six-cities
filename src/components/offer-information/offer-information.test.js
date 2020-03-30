import React from 'react';
import renderer from 'react-test-renderer';
import OfferInformation from './offer-information.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

const offers = [
  {
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
    inside: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      superStar: true
    },
    id: 1,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    city: `Moscow`,
    cityCoordinates: {
      location: [2, 2],
      zoom: 12
    },
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
    id: 2,
    coordinates: [52.369553943508, 4.85309666406198]
  }
];

const reviews = [
  {
    id: 1,
    date: new Date(2020, 3, 17),
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
    },
    avatar: `img/avatar-max.jpg`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }
];

const nearbyOffers = [
  {
    id: 1,
    name: `Beatiful flat`,
    type: `apartment`,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    rating: 4,
    coordinates: [52.369553943508, 4.85309666406198],
    favorite: false
  }
];

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  superStar: false,
  name: `Oliver.conner`
};

it(`OfferInformation should render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers
    },
    [NameSpace.APP]: {
      activeOffer: 1
    },
    [NameSpace.USER]: {
      userData: user,
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <OfferInformation
              reviews={reviews}
              nearbyOffers={nearbyOffers}
              currentSortType={`Popular`}
              onCardHover={() => {}}
              onReviewSubmit={() => {}}
              authorizationStatus={AuthorizationStatus.AUTH}
              loadingStatus={``}
              onLoadingStatusClear={() => {}}
              match={
                {
                  params: {
                    id: 1
                  }
                }
              }
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

configure({
  adapter: new Adapter()
});

const offer = {
  id: 1,
  name: `Beautiful & luxurious apartment at great location`,
  type: `apartment`,
  price: 120,
  picture: `img/apartment-01.jpg`,
  premium: true,
  favorite: false,
  rating: 4
};

it(`Correct information should be in OfferCard after hover`, () => {
  const onMouseHover = jest.fn();
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });
  const offerCard = mount(
      <BrowserRouter>
        <Provider store={store}>
          <OfferCard
            offer={offer}
            onMouseHover={onMouseHover}
          />
        </Provider>
      </BrowserRouter>
  );

  const placeCard = offerCard.find(`.place-card`);
  placeCard.simulate(`mouseenter`);

  expect(onMouseHover).toHaveBeenCalledTimes(1);
  expect(onMouseHover.mock.calls[0][0]).toMatchObject(offer);
});

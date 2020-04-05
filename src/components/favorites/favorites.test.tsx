import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Favorites from './favorites';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

it(`OfferCard should render correctly`, () => {
  const store = mockStore({
    [NameSpace.FAVORITE]: {
      favorites: []
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Favorites />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

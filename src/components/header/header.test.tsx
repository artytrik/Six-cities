import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from './header';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  superStar: false,
  name: `Oliver.conner`
};

it(`Header should render correctly`, () => {
  const store = mockStore({[NameSpace.USER]: {
    userData: user,
    authorizationStatus: `AUTH`
  }});

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Header
              userData={user}
              authorizationStatus={`AUTH`}
            />
          </Provider>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

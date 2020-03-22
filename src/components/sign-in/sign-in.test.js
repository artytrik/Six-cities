import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

it(`SignIn is rendered correctly`, () => {
  const store = mockStore({[NameSpace.USER]: {
    userData: {},
    authorizationStatus: `NO_AUTH`
  }});

  const tree = renderer.create((
    <BrowserRouter>
      <Provider store={store}>
        <SignIn
          onSubmit={() => {}}
        />
      </Provider>
    </BrowserRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

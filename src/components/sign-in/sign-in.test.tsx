import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignIn from './sign-in';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {noop} from '../../utils';

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
          onSubmit={noop}
          goBack={noop}
        />
      </Provider>
    </BrowserRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

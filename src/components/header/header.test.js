import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  superStar: false,
  name: `Oliver.conner`
};

it(`App should render correctly`, () => {
  const store = mockStore({});

  const tree = renderer
    .create(<Provider store={store}>
      <Header
        userData={user}
        authorizationStatus={`AUTH`}
      />
    </Provider>, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

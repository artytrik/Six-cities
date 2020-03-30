import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer/reducer.js';
import {Operation} from './reducer/operation.js';
import {ActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI, Error} from './api.js';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(Operation.loadOffers())
    .then(() => {
      ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.querySelector(`#root`)
      );
    })
    .catch((err) => {
      if (err.response >= Error.SERVER) {
        ReactDOM.render(
            <div>
              Сервер недоступен
            </div>,
            document.querySelector(`#root`)
        );
      }
    });
store.dispatch(Operation.checkAuth());
store.dispatch(Operation.loadFavorites());

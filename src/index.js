import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import {Provider} from 'react-redux';
import {OFFERS_NUMBER} from './mocks/offers.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offersNumber={OFFERS_NUMBER}
      />
    </Provider>,
    document.querySelector(`#root`)
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {offers, OFFERS_NUMBER} from './mocks/offers.js';

ReactDOM.render(
    <App
      offersNumber={OFFERS_NUMBER}
      offers={offers}
    />,
    document.querySelector(`#root`)
);

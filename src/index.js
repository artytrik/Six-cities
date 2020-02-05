import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const RENTAL_OFFERS = 10;

ReactDOM.render(
    <App
      rentalOffers={RENTAL_OFFERS}
    />,
    document.querySelector(`#root`)
);

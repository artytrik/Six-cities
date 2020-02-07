import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const RENTAL_OFFERS = 10;
const RENTAL_NAMES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

ReactDOM.render(
    <App
      rentalOffers={RENTAL_OFFERS}
      rentalNames={RENTAL_NAMES}
    />,
    document.querySelector(`#root`)
);

import React from 'react';
import Main from './main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {rentalOffers, rentalNames} = props;

  return (
    <Main
      rentalOffers={rentalOffers}
      rentalNames={rentalNames}
    />
  );
};

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired,
  rentalNames: PropTypes.array.isRequired
};

export default App;

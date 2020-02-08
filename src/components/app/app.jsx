import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const headerClickHandler = () => {};

const App = (props) => {
  const {rentalOffers, rentalNames} = props;

  return (
    <Main
      rentalOffers={rentalOffers}
      rentalNames={rentalNames}
      onHeaderClick={headerClickHandler}
    />
  );
};

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired,
  rentalNames: PropTypes.array.isRequired
};

export default App;

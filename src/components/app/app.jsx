import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const headerClickHandler = () => {};

const App = (props) => {
  const {offersNumber, offers} = props;

  return (
    <Main
      offersNumber={offersNumber}
      offers={offers}
      onHeaderClick={headerClickHandler}
    />
  );
};

App.propTypes = {
  offersNumber: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;

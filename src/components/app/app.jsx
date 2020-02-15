import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OfferInformation from '../offer-information/offer-information.jsx';

const headerClickHandler = () => {};

const App = (props) => {
  const {offersNumber, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offersNumber={offersNumber}
            offers={offers}
            onHeaderClick={headerClickHandler}
          />
        </Route>
        <Route exact path="/offer-information">
          <OfferInformation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersNumber: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;

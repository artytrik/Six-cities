import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OfferInformation from '../offer-information/offer-information.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = null;

    this._handleHeaderClick = this._handleHeaderClick.bind(this);
  }

  _handleHeaderClick(clickedOffer) {
    this.setState(clickedOffer);
  }

  _renderApp() {
    const {offersNumber, offers} = this.props;
    const activeOffer = this.state;

    if (activeOffer) {
      return <OfferInformation
        offer={activeOffer}
        onHeaderClick={this._handleHeaderClick}
      />;
    }

    return <Main
      offersNumber={offersNumber}
      offers={offers}
      onHeaderClick={this._handleHeaderClick}
    />;
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer-information">
            <OfferInformation
              offer={offers[0]}
              onHeaderClick={this._handleHeaderClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersNumber: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;

import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OfferInformation from '../offer-information/offer-information.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app.js';
import {ActionCreator as ReviewActionCreator} from '../../reducer/review/review.js';
import {Operation} from '../../reducer/operation.js';
import {getSortType, getActiveCity, getCurrentCard} from '../../reducer/app/selectors.js';
import {getNearbyOffers, getReviews, getCities} from '../../reducer/data/selectors.js';
import {getOffersByCity} from '../../reducer/selectors.js';
import SignIn from '../sign-in/sign-in.jsx';
import {getLoadingStatus} from '../../reducer/review/selectors.js';
import {AppRoute} from '../../utils.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import PrivateRoute from '../private-route/private-route.jsx';
import Favorites from '../favorites/favorites.jsx';

class App extends React.PureComponent {
  render() {
    const {
      offers,
      city,
      cities,
      onCityClick,
      onSortTypeClick,
      currentSortType,
      onCardHover,
      currentCard,
      reviews,
      nearbyOffers,
      authorizationStatus,
      login,
      onReviewSubmit,
      loadingStatus,
      onLoadingStatusClear
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main
              offers={offers}
              city={city}
              cities={cities}
              onCityClick={onCityClick}
              currentSortType={currentSortType}
              onSortTypeClick={onSortTypeClick}
              onCardHover={onCardHover}
              currentCard={currentCard}
              authorizationStatus={authorizationStatus}
            />
          </Route>
          <Route
            exact
            path={AppRoute.LOGIN}
            render={(props) => (
              <SignIn
                onSubmit={login}
                goBack={props.history.goBack}
              />
            )}
          >
          </Route>
          <Route
            exact
            path={`${AppRoute.OFFER}/:id`}
            render={({match}) => {
              return <OfferInformation
                currentSortType={currentSortType}
                onCardHover={onCardHover}
                reviews={reviews}
                nearbyOffers={nearbyOffers}
                onReviewSubmit={onReviewSubmit}
                authorizationStatus={authorizationStatus}
                loadingStatus={loadingStatus}
                onLoadingStatusClear={onLoadingStatusClear}
                match={match}
              />;
            }}>
          </Route>
          <PrivateRoute
            authorizationStatus={authorizationStatus}
            exact
            path={AppRoute.FAVORITES}
            render={() =>
              <Favorites />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCityClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  currentCard: PropTypes.object,
  reviews: PropTypes.array,
  nearbyOffers: PropTypes.array,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  loadingStatus: PropTypes.string.isRequired,
  onLoadingStatusClear: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  city: getActiveCity(state),
  cities: getCities(state),
  currentSortType: getSortType(state),
  currentCard: getCurrentCard(state),
  reviews: getReviews(state),
  nearbyOffers: getNearbyOffers(state),
  loadingStatus: getLoadingStatus(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  },
  onReviewSubmit(reviewData, id) {
    dispatch(Operation.postReview(reviewData, id));
  },
  onLoadingStatusClear() {
    dispatch(ReviewActionCreator.changeLoadingStatus(``));
  },
  onCityClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(city));
  },
  onSortTypeClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
  onCardHover(offer) {
    dispatch(ActionCreator.setCurrentCard(offer));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

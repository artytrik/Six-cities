import * as React from 'react';
import Main from '../main/main';
import {HashRouter, Route, Switch} from 'react-router-dom';
import OfferInformation from '../offer-information/offer-information';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app';
import {ActionCreator as ReviewActionCreator} from '../../reducer/review/review';
import {Operation} from '../../reducer/operation';
import {getSortType, getActiveCity, getCurrentCard} from '../../reducer/app/selectors';
import {getNearbyOffers, getReviews, getCities} from '../../reducer/data/selectors';
import {getOffersByCity} from '../../reducer/selectors';
import SignIn from '../sign-in/sign-in';
import {getLoadingStatus} from '../../reducer/review/selectors';
import {AppRoute} from '../../utils';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';
import {AuthorizationStatus} from '../../reducer/user/user';
import history from '../../history';
import {Offer, UserReview} from '../../types';

interface Props {
  offers: Offer[];
  city: string;
  cities: string[];
  onCityClick: () => void;
  onSortTypeClick: () => void;
  currentSortType: string;
  onCardHover: () => void;
  currentCard?: Offer;
  reviews?: UserReview[];
  nearbyOffers?: Offer[];
  authorizationStatus: string;
  login: () => void;
  onReviewSubmit: () => void;
  loadingStatus: string;
  onLoadingStatusClear: () => void;
}

class App extends React.PureComponent<Props, {}> {
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
      <HashRouter>
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
            />
          </Route>
          <PrivateRoute
            exact
            to={AppRoute.ROOT}
            path={AppRoute.LOGIN}
            require={authorizationStatus === AuthorizationStatus.NO_AUTH}
            render={() => (
              <SignIn
                onSubmit={login}
                goBack={history.goBack}
              />
            )}
          >
          </PrivateRoute>
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
                offerId={parseInt(match.params.id, 10)}
                currentCard={currentCard}
              />;
            }}>
          </Route>
          <PrivateRoute
            require={authorizationStatus === AuthorizationStatus.AUTH}
            to={AppRoute.LOGIN}
            exact
            path={AppRoute.FAVORITES}
            render={() =>
              <Favorites />
            }
          />
        </Switch>
      </HashRouter>
    );
  }
}

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

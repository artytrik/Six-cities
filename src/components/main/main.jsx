import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import SortingOptions from '../sorting-options/sorting-options.jsx';
import withToggle from '../../hocs/with-toggle/with-toggle.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import Header from '../header/header.jsx';

const SortingOptionsWrapped = withToggle(SortingOptions);

const Main = (props) => {
  const {
    offers,
    onHeaderClick,
    city,
    cities,
    onCityClick,
    onSortTypeClick,
    currentSortType,
    onCardHover,
    currentCard,
    userData,
    authorizationStatus
  } = props;
  const coordinates = offers.map((offer) => offer.coordinates);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers ? `` : ` page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              offers={offers}
              city={city}
              cities={cities}
              onCityClick={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${offers ? `` : ` cities__places-container--empty`}`}>
            {offers ?
              <section className={`${offers ? `cities__places places` : `cities__no-places`}`}>
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <SortingOptionsWrapped
                  currentSortType={currentSortType}
                  onSortTypeClick={onSortTypeClick}
                />
                <OffersList
                  className="cities__places-list tabs__content"
                  offers={offers}
                  onHeaderClick={onHeaderClick}
                  currentSortType={currentSortType}
                  onCardHover={onCardHover}
                />
              </section>
              :
              <MainEmpty />
            }
            <div className="cities__right-section">
              {offers &&
                <section className="cities__map map">
                  <Map
                    coordinates={coordinates}
                    currentCard={currentCard}
                  />
                </section>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCityClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  currentCard: PropTypes.object,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    superStar: PropTypes.bool
  }),
  authorizationStatus: PropTypes.string.isRequired
};

export default React.memo(Main);

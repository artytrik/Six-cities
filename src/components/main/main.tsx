import * as React from 'react';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import SortingOptions from '../sorting-options/sorting-options';
import withToggle from '../../hocs/with-toggle/with-toggle';
import MainEmpty from '../main-empty/main-empty';
import Header from '../header/header';
import {Offer} from '../../types';

interface Props {
  offers: Offer[];
  city: string;
  cities: string[];
  onCityClick: () => void;
  onSortTypeClick: () => void;
  currentSortType: string;
  onCardHover: () => void;
  currentCard?: Offer;
}

const SortingOptionsWrapped = withToggle(SortingOptions);

const Main: React.FC<Props> = (props: Props) => {
  const {
    offers,
    city,
    cities,
    onCityClick,
    onSortTypeClick,
    currentSortType,
    onCardHover,
    currentCard,
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers.length ? `` : ` page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              city={city}
              cities={cities}
              onCityClick={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${offers.length ? `` : ` cities__places-container--empty`}`}>
            {offers.length ?
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
                  currentSortType={currentSortType}
                  onCardHover={onCardHover}
                />
              </section>
              :
              <MainEmpty />
            }
            <div className="cities__right-section">
              {offers.length &&
                <section className="cities__map map">
                  <Map
                    offers={offers}
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

export default React.memo(Main);

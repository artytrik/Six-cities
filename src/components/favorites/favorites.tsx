import * as React from 'react';
import Header from '../header/header';
import {connect} from 'react-redux';
import {getFavorite} from '../../reducer/favorite/selectors';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils';
import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types';

interface Props {
  favorites: Offer[];
}

const Favorites: React.FC<Props> = (props: Props) => {
  const {favorites} = props;
  const isEmpty = favorites.length === 0;
  const groupCities = favorites.reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr[`city`])) {
      acc[curr[`city`]] = [];
    }

    acc[curr[`city`]].push(curr);

    return acc;
  }, {});

  return (
    <div className={`page ${isEmpty ? `page--favorites-empty` : ``}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isEmpty ? `page__main--favorites--empty` : ``}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isEmpty ? `favorites--empty` : ``}`}>
            {isEmpty ? <h1 className="visually-hidden">Favorites (empty)</h1> : <h1 className="favorites__title">Saved listing</h1>}
            {
              isEmpty ?
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div> :
                <ul className="favorites__list">
                  {Object.entries(groupCities).map(([city, offers]: [string, Offer[]]) => {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {offers.map((offer) =>
                            <OfferCard
                              key={offer.id}
                              offer={offer}
                              favoriteCard
                            />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: getFavorite(state)
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);

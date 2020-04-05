import * as React from 'react';
import {getStarRating, LivingType, MaxValue, AppRoute} from '../../utils';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import ReviewForm from '../review-form/review-form';
import withForm from '../../hocs/with-form/with-form';
import {AuthorizationStatus} from '../../reducer/user/user';
import Header from '../header/header';
import {connect} from 'react-redux';
import {getActiveOffer} from '../../reducer/selectors';
import {ActionCreator} from '../../reducer/app/app';
import {Operation} from '../../reducer/operation';
import {Link} from 'react-router-dom';
import {Offer, UserReview} from '../../types';

interface Props {
  offer: Offer;
  currentSortType: string;
  reviews?: UserReview[];
  nearbyOffers?: Offer[];
  onReviewSubmit: () => void;
  authorizationStatus: string;
  loadingStatus: string;
  onLoadingStatusClear: () => void;
  offerId?: number;
  setActiveOffer: (offerId: number) => void;
  currentCard?: Offer;
  onFavoriteClick: (evt: React.MouseEvent, id: number, favorite: boolean) => void;
}

const ReviewFormWrapped = withForm(ReviewForm);

const OfferInformation: React.FC<Props> = (props: Props) => {
  const {
    currentSortType,
    reviews,
    nearbyOffers,
    onReviewSubmit,
    authorizationStatus,
    loadingStatus,
    onLoadingStatusClear,
    offer,
    offerId,
    setActiveOffer,
    currentCard,
    onFavoriteClick
  } = props;

  if (!offer || offer && offer.id !== offerId) {
    setActiveOffer(offerId);
    return (<React.Fragment></React.Fragment>);
  }

  const {name, type, price, premium, gallery, rating, bedrooms, adults,
    description, features, user, id, favorite} = offer;
  const {avatar, name: userName, superStar} = user;
  const limitedGallery = gallery.slice(0, MaxValue.PHOTOS);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {limitedGallery.map((picture, i) => (
                <div key={`picture-${i}`} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={picture}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <button
                    className={`property__bookmark-button button${favorite ? ` property__bookmark-button--active` : ``}`}
                    type="button"
                    onClick={(evt) => onFavoriteClick(evt, id, favorite ? false : true)}
                  >
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button> :
                  <Link to={AppRoute.LOGIN} className={`property__bookmark-button button`}>
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </Link>
                }
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getStarRating(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {LivingType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {features.map((item, i) => (
                    <li key={`item-${i}`} className="property__inside-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${superStar ? `property__avatar-wrapper--pro` : ``}`}>
                    <img
                      className="property__avatar user__avatar"
                      src={avatar}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{userName}</span>
                </div>
                <div className="property__description">
                  {description}
                </div>
              </div>
              <section className="property__reviews reviews">
                {reviews.length > 0 &&
                  <ReviewsList
                    reviews={reviews}
                  />
                }
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <ReviewFormWrapped
                    id={id}
                    onReviewSubmit={onReviewSubmit}
                    loadingStatus={loadingStatus}
                    onLoadingStatusClear={onLoadingStatusClear}
                  />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearbyOffers}
              activeOffer={offer}
              currentCard={currentCard}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList
              className="near-places__list"
              offers={nearbyOffers}
              currentSortType={currentSortType}
              nearbyFor={id}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offer: getActiveOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(offer) {
    dispatch(ActionCreator.changeActiveOffer(Number(offer)));
    dispatch(Operation.loadReviews(offer));
    dispatch(Operation.loadNearbyOffers(offer));
  },
  onFavoriteClick(evt, id, status) {
    evt.preventDefault();
    if (status) {
      dispatch(Operation.addFavorite(id));
    } else {
      dispatch(Operation.removeFavorite(id));
    }
  }
});

export {OfferInformation};
export default connect(mapStateToProps, mapDispatchToProps)(OfferInformation);

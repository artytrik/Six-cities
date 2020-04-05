import * as React from 'react';
import {getStarRating, AppRoute, LivingType} from '../../utils';
import {Operation} from '../../reducer/operation';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';
import {Link} from 'react-router-dom';
import {Offer} from '../../types';

interface Props {
  offer: Offer;
  onMouseHover?: (offer: Offer) => void;
  favoriteCard: boolean;
  onFavoriteClick: (evt: React.MouseEvent, id: number, favorite: boolean, nearbyFor: number) => void;
  authorizationStatus: string;
  nearbyFor?: number;
}

const OfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    offer,
    onMouseHover,
    favoriteCard,
    onFavoriteClick,
    authorizationStatus,
    nearbyFor
  } = props;
  const {name, type, price, picture, premium, rating, favorite, id} = offer;

  return (
    <article className={`${favoriteCard ? `favorites__card` : `cities__place-card`} place-card`}
      onMouseEnter={onMouseHover ? () => (onMouseHover(offer)) : null}
      onMouseLeave={onMouseHover ? () => (onMouseHover(null)) : null}
    >
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${favoriteCard ? `favorites__image-wrapper ` : `cities__image-wrapper `}place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={picture}
            width={favoriteCard ? 150 : 260}
            height={favoriteCard ? 110 : 200}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${favoriteCard ? `favorites__card-info ` : ``}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH ?
            <button
              className={`place-card__bookmark-button button${favorite ? ` place-card__bookmark-button--active` : ``}`}
              type="button"
              onClick={(evt) => onFavoriteClick(evt, id, favorite ? false : true, nearbyFor)}
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button> :
            <Link to={AppRoute.LOGIN} className={`place-card__bookmark-button button`}>
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </Link>
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getStarRating(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.OFFER}/${id}`}
          >
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{LivingType[type]}</p>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(evt, id, status, nearbyFor) {
    evt.preventDefault();
    dispatch(status ? Operation.addFavorite(id) : Operation.removeFavorite(id))
    .then(() => {
      if (nearbyFor !== undefined) {
        dispatch(Operation.loadNearbyOffers(nearbyFor));
      }
    });
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);

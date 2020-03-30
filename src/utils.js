export const MaxValue = {
  CITIES: 6,
  REVIEWS: 10,
  PHOTOS: 6
};

export const ReviewLength = {
  MIN: 50,
  MAX: 300
};

const StarRating = new Map([
  [1, `20%`],
  [2, `40%`],
  [3, `60%`],
  [4, `80%`],
  [5, `100%`]
]);

export const TextRating = new Map([
  [1, `terribly`],
  [2, `badly`],
  [3, `not bad`],
  [4, `good`],
  [5, `perfect`]
]);

export const RatingValues = [5, 4, 3, 2, 1];

export const getStarRating = (rating) => StarRating.get(Math.round(rating));

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const getUniqueCities = (offers) => {
  const cities = new Set();
  offers.forEach((offer) => {
    cities.add(offer.city);
  });

  const uniqueCities = [...cities].slice(0, MaxValue.CITIES);

  return uniqueCities;
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`
};

export const ServerRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  getComments(id) {
    return `/comments/${id}`;
  },
  getNearbyOffers(id) {
    return `/hotels/${id}/nearby`;
  },
  getFavorite(id, status) {
    return `/favorite/${id}/${status}`;
  }
};

export const makeUpperCase = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

export const LivingType = {
  room: `Private room`,
  house: `House`,
  hotel: `Hotel`,
  apartment: `Apartment`
};

export const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

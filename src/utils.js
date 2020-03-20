const MAX_CITIES = 6;

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

  const uniqueCities = [...cities].slice(0, MAX_CITIES);

  return uniqueCities;
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  OFFER: `/offer`
};

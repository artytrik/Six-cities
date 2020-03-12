export const starRating = new Map([
  [0, `0`],
  [1, `20%`],
  [2, `40%`],
  [3, `60%`],
  [4, `80%`],
  [5, `100%`]
]);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const getCities = (offers) => {
  const cities = new Set();
  offers.forEach((offer) => {
    cities.add(offer.city);
  });

  const maxCities = [...cities].slice(0, 6);

  return maxCities;
};

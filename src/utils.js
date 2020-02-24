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

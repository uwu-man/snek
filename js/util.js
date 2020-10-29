const random = {
  int: (min, max) => Math.floor(Math.random() * (max - min)) + min,
  coinFlip: (heads, tails) => (Math.random() > 0.5 ? heads : tails),
};

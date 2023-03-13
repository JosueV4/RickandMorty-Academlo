export const getRandomNumber = (min, max) => {
  const amplitud = max - min;
  const amplitudRandom = Math.random() * amplitud;

  return min + Math.round(amplitudRandom);
};

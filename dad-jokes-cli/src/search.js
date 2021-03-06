const { get } = require('./request');

const SEARCH_URL = 'https://icanhazdadjoke.com/search';
const PAGE_LIMIT = 30;

const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const searchJoke = async term => {
  const query = new URLSearchParams({ term, limit: PAGE_LIMIT }).toString();

  try {
    const {
      results: firstPageJokes,
      total_jokes: totalJokesAmount
    } = await get(`${SEARCH_URL}?${query}`);

    if(!totalJokesAmount) {
      return null;
    }

    const randomJokeNumber = randomInRange(1, totalJokesAmount);

    let randomJoke;

    if(randomJokeNumber <= PAGE_LIMIT) {
      randomJoke = firstPageJokes[randomJokeNumber - 1];
    } else {
      const query = new URLSearchParams({ term, page: randomJokeNumber, limit: 1 }).toString();
      const { results } = await get(`${SEARCH_URL}?${query}`);
      randomJoke = results[0];
    }

    return randomJoke;

  } catch (e) {
    console.error(e);
  }
};

module.exports = { searchJoke };

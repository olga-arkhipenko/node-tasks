const { get } = require('./request');

const SEARCH_URL = 'https://icanhazdadjoke.com/search';

const searchJoke = async term => {
  const query = new URLSearchParams({ term }).toString();

  try {
    const joke = await get(`${SEARCH_URL}?${query}`);
    console.log(joke);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { searchJoke };

const { readJokes } = require('./jokeStorage');

const getTopJoke = () => {
  const jokes = readJokes();
  const sortedJokes = Object.entries(jokes).sort((jokeFirst, jokeSecond) => jokeSecond[1].rating - jokeFirst[1].rating);

  if(!sortedJokes.length) {
    return null;
  }

  return sortedJokes[0][1].joke;
};

module.exports = { getTopJoke };

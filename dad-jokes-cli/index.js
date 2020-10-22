#!/usr/bin/env node
const { searchJoke } = require('./src/search');
const { getTopJoke } = require('./src/leaderboard');
const { initJokeStorage, upsertJoke } = require('./src/jokeStorage');

const SEARCH_MODE = '--searchTerm';
const LEADERBOARD_MODE = '--leaderboard';

const main = async () => {
  initJokeStorage();

  const [ , , mode, searchTerm] = process.argv;

  if (mode === LEADERBOARD_MODE) {
    const topJoke = getTopJoke();
    const message = topJoke || 'There are no jokes yet';
    console.log(message);
  } else if (mode === SEARCH_MODE && searchTerm) {
    const randomJoke = await searchJoke(searchTerm);

    if (!randomJoke) {
      console.log('No jokes were found for that search term');
    } else {
      console.log(randomJoke.joke);
      upsertJoke(randomJoke);
    }
  } else throw new Error('No arguments provided');
};

main();


const { readJokes } = require('./file');

const showLeaderboard = () => {
  const jokes = readJokes();
  const sortedJokes = Object.entries(jokes).sort((jokeFirst, jokeSecond) => jokeSecond[1].counter - jokeFirst[1].counter);

  if(!sortedJokes.length) {
    console.log('There are no jokes yet');
    return;
  }

  console.log(sortedJokes[0][1].joke);
};

module.exports = { showLeaderboard };

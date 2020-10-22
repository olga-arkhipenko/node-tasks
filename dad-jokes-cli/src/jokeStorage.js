const fs = require('fs');
const path = require('path');

const ENCODING = 'utf8';
const PROJECT_ROOT = path.dirname(__dirname);
const FILE_NAME = '.jokes.json';
const FILE_PATH = path.join(PROJECT_ROOT, FILE_NAME);

const initJokeStorage = () => {
  if(!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify({}), ENCODING);
  }
};

const readJokes = () => {
  const fileData = fs.readFileSync(FILE_PATH, { encoding: ENCODING }).trim();
  return JSON.parse(fileData);
};

const upsertJoke = ({ id, joke }) => {
  const jokes = readJokes();

  if(jokes[id]) {
    jokes[id].rating += 1;
  } else {
    jokes[id] = { joke, rating: 1 };
  }

  fs.writeFileSync(FILE_PATH, JSON.stringify(jokes), ENCODING);
};

module.exports = { initJokeStorage, upsertJoke, readJokes };

const path = require('path');
const fs = require('fs');

const ENCODING = 'utf8';
const PROJECT_ROOT = path.dirname(__dirname);
const FILE_DIR = path.join(PROJECT_ROOT, '.caches');
const FILE_NAME = 'jokes.json';
const FILE_PATH = path.join(FILE_DIR, FILE_NAME);

const readJokes = () => {
  if(!fs.existsSync(FILE_PATH)) {
    fs.mkdirSync(FILE_DIR, { recursive: true });
    return {};
  } else {
    const fileData = fs.readFileSync(FILE_PATH, { encoding: ENCODING }).trim();
    const parsedJson = fileData && JSON.parse(fileData);
    if (!parsedJson || parsedJson.constructor !== Object) throw new Error('Invalid jokes.json');
    return parsedJson;
  }
};

const updateJokes = ({ id, joke }) => {
  const jokes = readJokes();

  if(jokes[id]) {
    jokes[id].counter += 1;
  } else {
    jokes[id] = { joke, counter: 1 };
  }

  fs.writeFileSync(FILE_PATH, JSON.stringify(jokes), ENCODING);
};

module.exports = { updateJokes, readJokes };

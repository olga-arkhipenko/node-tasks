#!/usr/bin/env node
const { searchJoke } = require('./src/search');
const { showLeaderboard } = require('./src/leaderboard');

const SEARCH_MODE = '--searchTerm';
const LEADERBOARD_MODE = '--leaderboard';

const [ , , mode, searchTerm] = process.argv;

if (mode === LEADERBOARD_MODE) {
  showLeaderboard();
} else if (mode === SEARCH_MODE && searchTerm) {
  searchJoke(searchTerm);
} else throw new Error('No arguments provided');


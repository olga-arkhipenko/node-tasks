#!/usr/bin/env node
const { searchJoke, showLeaderboard } = require('./services');

const SEARCH_MODE = '--searchTerm';
const LEADERBOARD_MODE = '--leaderboard';

const [ , , mode, searchTerm] = process.argv;

if (mode === LEADERBOARD_MODE) {
  showLeaderboard();
} else if (mode === SEARCH_MODE && searchTerm) {
  searchJoke(searchTerm);
} else throw new Error('No arguments provided');


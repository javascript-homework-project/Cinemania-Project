// src/js/index.js
import { showLoader, hideLoader } from './loader.js';
import { fetchTrendingMovies, fetchUpcomingMovies } from './movies-data.js';
import {
  renderMovieCard,
  updateHeroWithMovie,
  renderUpcomingSection,
} from './ui-helpers.js';


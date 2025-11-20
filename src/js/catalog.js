// src/js/catalog.js
import {
  searchMovies,
  fetchPopularMovies,
} from './movies-data.js';
import { setupPagination } from './pagination.js';
import { showLoader, hideLoader } from './loader.js';
import { renderMovieCard, updateHeroWithMovie } from './ui-helpers.js';


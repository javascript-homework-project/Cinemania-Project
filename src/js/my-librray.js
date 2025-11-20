import { fetchMovieDetails } from './movies-data.js';
import { renderMovieCard, updateHeroWithMovie } from './ui-helpers.js';

const initLibrary = async () => {
    const grid = document.getElementById('library-grid');
    const ids = JSON.parse(localStorage.getItem('myLibrary')) || [];
    
    if(!ids.length) {
        grid.innerHTML = `<div class="library-message"><p>OOPS... You haven't added any movies yet!</p></div>`;
        return;
    }

    const movies = [];
    for(const id of ids) {
        const m = await fetchMovieDetails(id);
        if(m) movies.push(m);
    }

    grid.innerHTML = movies.map(renderMovieCard).join('');
    if(movies[0]) updateHeroWithMovie(movies[0].id, document.getElementById('library-hero'), document.getElementById('library-hero-content'));
    
    grid.onclick = (e) => {
        const card = e.target.closest('.movie-card');
        if(card && window.openMovieModal) window.openMovieModal(card.dataset.id);
    };
};
initLibrary();
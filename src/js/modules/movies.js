
import { movieTemplate } from '../templates/index';

const API_BASE = `https://yts.am/api/v2/list_movies.json?genre=`;
const loadMovies = async (genre) => {
  const moviesResponse = await fetch(`${API_BASE}${genre}`);
  const moviesData = await moviesResponse.json();
  const { data } = moviesData;
  return data;
};

const addMovies = async (section, category) => {
  const actionMoviesContainer = document.querySelector(section);
  const moviesList = actionMoviesContainer.getElementsByClassName('movies__group');
  const spinner = actionMoviesContainer.getElementsByClassName('lds-circle');
  const actionMovies = await loadMovies(category);
  spinner[0].style.display = 'none';
  let htmlContent = '';
  actionMovies.movies.forEach(movie => {
    htmlContent += movieTemplate(movie);
  });
  moviesList[0].innerHTML = htmlContent;
}

const populateMovies = () => {
  addMovies('.action','action');
  addMovies('.comedy','comedy');
}
export default populateMovies;

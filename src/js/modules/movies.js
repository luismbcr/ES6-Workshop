
const API_BASE = `https://yts.am/api/v2/list_movies.json?genre=`;

const loadMovies = async () => {
  const actionMoviesResponse = await fetch(`${API_BASE}action`);
  const actionMoviesData = await actionMoviesResponse.json();
  console.log(actionMoviesData);
};

export default loadMovies;

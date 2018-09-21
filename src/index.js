import 'normalize.css';
import './scss/main.scss';

import getUserData from './js/modules/user';
import loadMovies from './js/modules/movies';

getUserData();

loadMovies();

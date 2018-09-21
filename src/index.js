import 'normalize.css';
import './scss/main.scss';

import getUserData from './js/modules/user';
import populateMovies from './js/modules/movies';

getUserData();
populateMovies();

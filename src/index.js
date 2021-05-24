import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@styles/default.scss';
import '@styles/layout.scss';
import '@styles/media-queries.scss';
import '@styles/magnific-popup.scss';

import './js/jquery-migrate-1.2.1.min.js';
import './js/jquery.flexslider.js';
import './js/waypoints.js';
import './js/jquery.fittext.js';
import './js/magnific-popup.js';
import './js/init.js';

ReactDOM.render(<App />, document.getElementById('root'));
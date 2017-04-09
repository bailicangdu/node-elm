'use strict';

import home from './home.js'

export default app => {
	app.get('/', (req, res, next) => {
		res.redirect('/home');
	});
	app.use('/home', home);
}
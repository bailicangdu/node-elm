'use strict';

import home from './home';
import v1 from './v1'
import shopping from './shopping'

export default app => {
	app.get('/', (req, res, next) => {
		res.redirect('/home');
	});
	app.use('/home', home);
	app.use('/v1', v1);
	app.use('/shopping', shopping);
}
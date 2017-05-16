'use strict';

import home from './home';
import v1 from './v1'
import v2 from './v2'
import v4 from './v4'
import shopping from './shopping'

export default app => {
	app.get('/', (req, res, next) => {
		res.redirect('/home');
	});
	app.use('/home', home);
	app.use('/v1', v1);
	app.use('/v2', v2);
	app.use('/v4', v4);
	app.use('/shopping', shopping);
}
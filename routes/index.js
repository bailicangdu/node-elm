'use strict';

import home from './home';
import v1 from './v1'

export default app => {
	app.get('/', (req, res, next) => {
		res.redirect('/home');
	});
	app.use('/home', home);
	app.use('/v1', v1);
}
'use strict';

module.exports = {
	port: 8001,
	url: 'mongodb://139.224.234.213:27017/elm',
	session: {
		name: 'elm',
		secret: 'elm',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}
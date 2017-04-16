'use strict';

export default {
	port: 3000,
	url: 'mongodb://localhost:27017/elm',
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
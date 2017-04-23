'use strict';

import Cities from '../../models/v1/cities';

class CityHandle {
	constructor(){

	}
	async cityGuess(req, res, next){
		const type = req.query.type;
		if (!type) {
			res.json({
				name: 'ERROR_QUERY_TYPE',
				message: '参数错误',
			})
			return 
		}
		let cityInfo;
		switch (type){
			case 'guess': 
				cityInfo = await Cities.cityGuess('SH');


		}
		res.json(cityInfo)
	}
}

export default new CityHandle()
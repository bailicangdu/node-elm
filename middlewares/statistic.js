'use strict';

import AddressComponent from '../prototype/addressComponent'
import StatisModel from '../models/statis/statis'
import dtime from 'time-formater'

class Statistic extends AddressComponent {
	constructor(){
		super()
		this.apiRecord = this.apiRecord.bind(this)
	}
	async apiRecord(req, res, next){
		try{
			const address = await this.guessPosition(req);
			const statis_id = await this.getId('statis_id')
			const apiInfo = {
				date: dtime().format('YYYY-MM-DD'),
				origin: req.headers.origin,
				id: statis_id,
				address: address.city,
			}
			StatisModel.create(apiInfo)
		}catch(err){
			console.log('API记录出错', err);
		}
		next()
	}
}

export default new Statistic()
'use strict';

import BaseComponent from '../prototype/baseComponent'
import StatisModel from '../models/statis/statis'
import dtime from 'time-formater'

class Statistic extends BaseComponent {
	constructor(){
		super()
		this.apiRecord = this.apiRecord.bind(this)
	}
	async apiRecord(req, res, next){
		try{
			const statis_id = await this.getId('statis_id')
			const apiInfo = {
				date: dtime().format('YYYY-MM-DD'),
				origin: req.headers.origin,
				id: statis_id,
			}
			StatisModel.create(apiInfo)
		}catch(err){
			console.log('API记录出错', err);
		}
		next()
	}
}

export default new Statistic()
'use strict';

import BaseComponent from '../../prototype/baseComponent';
import Cities from '../../models/v1/cities';

class SearchPlace extends BaseComponent{
	constructor(){
		super()
	}
	async search(req, res, next){
		const {type, city_id, keyword} = req.query;
		if (!type || isNaN(city_id) || !keyword) {
			res.send({
				name: 'ERROR_QUERY_TYPE',
				message: '参数错误',
			})
			return
		}
		try{
			const cityInfo = await Cities.getCityById(city_id);
			const aaa = await this.fetch('http://restapi.amap.com/v3/place/text?key=e1467cff48d3359df43012aa8c3a252b&keywords=北京大学&types=141201&city=北京&children=1&offset=20&page=1&extensions=all')
			// const resList = await this.fetch(http://restapi.amap.com/v3/place/text', {
			// 	key: 'e1467cff48d3359df43012aa8c3a252b',
			// 	keywords: keyword,
			// 	types: 141201,
			// 	city: cityInfo.name,
			// 	children: 1,
			// 	offset: 10,
			// 	page: 1,
			// 	extensions: 'all',
			// })
			res.send(aaa);
		}catch(err){
			res.send(err);
		}
	}
}

export default new SearchPlace();
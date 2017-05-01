'use strict';

import BaseComponent from '../../prototype/baseComponent';
import Cities from '../../models/v1/cities';


class SearchPlace extends BaseComponent{
	constructor(){
		super()
		this.search = this.search.bind(this)
	}
	async search(req, res, next){
		const {type = 'search', city_id, keyword} = req.query;
		if (isNaN(city_id) || !keyword) {
			res.send({
				name: 'ERROR_QUERY_TYPE',
				message: '参数错误',
			})
			return
		}
		try{
			const cityInfo = await Cities.getCityById(city_id);
			/*
			调用腾讯地图api
			 */
			const resObj = await this.fetch('http://apis.map.qq.com/ws/place/v1/search', {
				key: 'RLHBZ-WMPRP-Q3JDS-V2IQA-JNRFH-EJBHL',
				keyword: encodeURIComponent(keyword),
				boundary: 'region(' + encodeURIComponent(cityInfo.name) + ',0)',
				page_size: 10,
			});
			const resArr = [];
			resObj.data.forEach((item, index) => {
				resArr.push({
					name: item.title,
					address: item.address,
					latitude: item.location.lat,
					longitude: item.location.lng,
					geohash: item.location.lat + ',' + item.location.lng,
				})
			});
			res.send(resArr);
		}catch(err){
			res.send({
				name: 'GET_ADDRESS_ERROR',
				message: '获取地址信息失败',
			});
		}
	}
}

export default new SearchPlace();
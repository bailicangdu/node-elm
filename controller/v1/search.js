'use strict';

import AddressComponent from '../../prototype/addressComponent';
import Cities from '../../models/v1/cities';


class SearchPlace extends AddressComponent{
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
			const resObj = await this.searchPlace(keyword, cityInfo.name);
			const cityList = [];
			resObj.data.forEach((item, index) => {
				cityList.push({
					name: item.title,
					address: item.address,
					latitude: item.location.lat,
					longitude: item.location.lng,
					geohash: item.location.lat + ',' + item.location.lng,
				})
			});
			res.send(cityList);
		}catch(err){
			res.send({
				name: 'GET_ADDRESS_ERROR',
				message: '获取地址信息失败',
			});
		}
	}
}

export default new SearchPlace();
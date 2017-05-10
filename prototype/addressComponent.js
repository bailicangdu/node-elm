'use strict';

import BaseComponent from './baseComponent'

/*
腾讯地图API统一调配组件
 */
class AddressComponent extends BaseComponent {
	constructor(){
		super();
		this.key = 'RLHBZ-WMPRP-Q3JDS-V2IQA-JNRFH-EJBHL';
	}
	//获取定位地址
	async guessPosition(req){
		let ip = req.headers['x-forwarded-for'] || 
 		req.connection.remoteAddress || 
 		req.socket.remoteAddress ||
 		req.connection.socket.remoteAddress;
 		const ipArr = ip.split(':');
 		ip = ipArr[ipArr.length -1];
 		if (process.env.NODE_ENV == 'development') {
 			ip = '116.231.55.195';
 		}
 		try{
	 		const result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
	 			ip,
	 			key: this.key,
	 		})
	 		if (result.status == 0) {
	 			const cityInfo = {
	 				lat: result.result.location.lat,
	 				lng: result.result.location.lng,
	 				city: result.result.ad_info.city,
	 			}
	 			cityInfo.city = cityInfo.city.replace(/市$/, '');
	 			return cityInfo
	 		}else{
	 			throw new Error('定位失败');
	 		}
 			
 		}catch(err){
 			throw new Error(err);
 		}
	}
	//搜索地址
	async searchPlace(keyword, cityName){
		try{
			const resObj = await this.fetch('http://apis.map.qq.com/ws/place/v1/search', {
				key: this.key,
				keyword: encodeURIComponent(keyword),
				boundary: 'region(' + encodeURIComponent(cityName) + ',0)',
				page_size: 10,
			});
			if (resObj.status == 0) {
				return resObj
			}else{
				throw new Error('搜索位置信息失败');
			}
		}catch(err){
			throw new Error(err);
		}
	}
}

export default AddressComponent
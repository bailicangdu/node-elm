'use strict';

import BaseComponent from './baseComponent'

/*
腾讯地图和百度地图API统一调配组件
 */
class AddressComponent extends BaseComponent {
	constructor(){
		super();
		this.tencentkey = 'RLHBZ-WMPRP-Q3JDS-V2IQA-JNRFH-EJBHL';
		this.baidukey = 'fjke3YUipM9N64GdOIh1DNeK2APO2WcT';
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
	 			key: this.tencentkey,
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
	 			console.log('定位失败');
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
				key: this.tencentkey,
				keyword: encodeURIComponent(keyword),
				boundary: 'region(' + encodeURIComponent(cityName) + ',0)',
				page_size: 10,
			});
			if (resObj.status == 0) {
				return resObj
			}else{
				console.log('搜索位置信息失败')
				throw new Error('搜索位置信息失败');
			}
		}catch(err){
			throw new Error(err);
		}
	}
	//测量距离
	async getDistance(from, to){
		try{
			const res = await this.fetch('http://api.map.baidu.com/routematrix/v2/driving', {
				ak: this.baidukey,
				output: 'json',
				origins: from,
				destinations: to,
			})
			if(res.status == 0){
				const positionArr = []; 
				res.result.forEach(item => {
					positionArr.push({
						distance: item.distance.text,
						order_lead_time: item.duration.text,
					})
				})
				return positionArr
			}else{
				console.log('调用百度地图测距失败');
				throw new Error('调用百度地图测距失败');
			}
		}catch(err){
			console.log('获取位置距离失败')
			throw new Error('获取位置距离失败');
		}
	}
	//通过ip地址获取精确位置
	async geocoder(req){
		try{
			const address = await this.guessPosition(req);
			const res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', {
				key: this.tencentkey,
				location: address.lat + ',' + address.lng
			})
			if (res.status == 0) {
				return res
			}else{
				console.log('获取具体位置信息失败');
				throw new Error('获取具体位置信息失败');
			}
		}catch(err){
			console.log('geocoder获取定位失败')
			throw new Error('geocoder获取定位失败');
		}
	}
	//通过geohash获取精确位置
	async getpois(lat, lng){
		try{
			const res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', {
				key: this.tencentkey,
				location: lat + ',' + lng
			})
			if (res.status == 0) {
				return res
			}else{
				console.log('通过获geohash取具体位置失败');
				throw new Error('通过geohash获取具体位置失败');
			}
		}catch(err){
			console.log('getpois获取定位失败')
			throw new Error('getpois获取定位失败');
		}
	}
}

export default AddressComponent
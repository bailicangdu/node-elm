'use strict';

import BaseComponent from './baseComponent'

/*
腾讯地图和百度地图API统一调配组件
 */
class AddressComponent extends BaseComponent {
	constructor(){
		super();
		this.tencentkey = 'RLHBZ-WMPRP-Q3JDS-V2IQA-JNRFH-EJBHL';
		this.tencentkey2 = 'RRXBZ-WC6KF-ZQSJT-N2QU7-T5QIT-6KF5X';
		this.tencentkey3 = 'OHTBZ-7IFRG-JG2QF-IHFUK-XTTK6-VXFBN';
		this.tencentkey4 = 'Z2BBZ-QBSKJ-DFUFG-FDGT3-4JRYV-JKF5O';
		this.baidukey = 'fjke3YUipM9N64GdOIh1DNeK2APO2WcT';
		// this.baidukey2 = 'fjke3YUipM9N64GdOIh1DNeK2APO2WcT';
	}
	//获取定位地址
	async guessPosition(req){
		return new Promise(async (resolve, reject) => {
			let ip;
			const defaultIp = '180.158.102.141';
	 		if (process.env.NODE_ENV == 'development') {
	 			ip = defaultIp;
	 		} else {
	 			try {
					ip = req.headers['x-forwarded-for'] || 
			 		req.connection.remoteAddress || 
			 		req.socket.remoteAddress ||
			 		req.connection.socket.remoteAddress;
			 		const ipArr = ip.split(':');
			 		ip = ipArr[ipArr.length -1] || defaultIp;
				} catch (e) {
					ip = defaultIp;
				}
	 		}
	 		try{
		 		let result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
		 			ip,
		 			key: this.tencentkey,
		 		})
		 		if (result.status != 0) {
		 			result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
			 			ip,
			 			key: this.tencentkey2,
			 		})
		 		}
		 		if (result.status != 0) {
		 			result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
			 			ip,
			 			key: this.tencentkey3,
			 		})
		 		}
		 		if (result.status != 0) {
		 			result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
			 			ip,
			 			key: this.tencentkey4,
			 		})
		 		}
		 		if (result.status == 0) {
		 			const cityInfo = {
		 				lat: result.result.location.lat,
		 				lng: result.result.location.lng,
		 				city: result.result.ad_info.city,
		 			}
		 			cityInfo.city = cityInfo.city.replace(/市$/, '');
		 			resolve(cityInfo)
		 		}else{
		 			console.log('定位失败', result)
		 			reject('定位失败');
		 		}
	 		}catch(err){
	 			reject(err);
	 		}
		})
	}
	//搜索地址
	async searchPlace(keyword, cityName, type = 'search'){
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
				throw new Error('搜索位置信息失败');
			}
		}catch(err){
			throw new Error(err);
		}
	}
	//测量距离
	async getDistance(from, to, type){
		try{
			let res
			res = await this.fetch('http://api.map.baidu.com/routematrix/v2/driving', {
				ak: this.baidukey,
				output: 'json',
				origins: from,
				destinations: to,
			})
			// if(res.status !== 0){
			// 	res = await this.fetch('http://api.map.baidu.com/routematrix/v2/driving', {
			// 		ak: this.baidukey2,
			// 		output: 'json',
			// 		origins: from,
			// 		destinations: to,
			// 	})
			// }
			if(res.status == 0){
				const positionArr = [];
				let timevalue;
				res.result.forEach(item => {
					timevalue = parseInt(item.duration.value) + 1200;
					let durationtime = Math.ceil(timevalue%3600/60) + '分钟';
					if(Math.floor(timevalue/3600)){
						durationtime = Math.floor(timevalue/3600) + '小时' + durationtime;
					}
					positionArr.push({
						distance: item.distance.text,
						order_lead_time: durationtime,
					})
				})
				if (type == 'tiemvalue') {
					return timevalue
				}else{
					return positionArr
				}
			}else{
				if (type == 'tiemvalue') {
					return 2000;
				} else {
					throw new Error('调用百度地图测距失败');
				}
			}
		}catch(err){
			console.log('获取位置距离失败');
			throw new Error(err);
		}
	}
	//通过ip地址获取精确位置
	async geocoder(req){
		try{
			const address = await this.guessPosition(req);
			const params = {
				key: this.tencentkey,
				location: address.lat + ',' + address.lng
			};
			let res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
			if (res.status != 0) {
				params.key = this.tencentkey2;
	 			res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
	 		}
	 		if (res.status != 0) {
	 			params.key = this.tencentkey3;
	 			res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
	 		}
	 		if (res.status != 0) {
	 			params.key = this.tencentkey4;
	 			res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
	 		}
			if (res.status == 0) {
				return res
			}else{
				throw new Error('获取具体位置信息失败');
			}
		}catch(err){
			console.log('geocoder获取定位失败', err);
			throw new Error(err);
		}
	}
	//通过geohash获取精确位置
	async getpois(lat, lng){
		try{
			const params = {
				key: this.tencentkey,
				location: lat + ',' + lng
			};
			let res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
			if (res.status != 0) {
				params.key = this.tencentkey2;
	 			res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
	 		}
	 		if (res.status != 0) {
	 			params.key = this.tencentkey3;
	 			res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
	 		}
	 		if (res.status != 0) {
	 			params.key = this.tencentkey4;
	 			res = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1/', params);
	 		}
			if (res.status == 0) {
				return res
			}else{
				throw new Error('通过获geohash取具体位置失败');
			}
		}catch(err){
			console.log('getpois获取定位失败', err)
			throw new Error(err);
		}
	}
}

export default AddressComponent
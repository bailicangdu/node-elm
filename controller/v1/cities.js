'use strict';

import Cities from '../../models/v1/cities';
import pinyin from "pinyin";  
import BaseComponent from '../../prototype/baseComponent'


class CityHandle extends BaseComponent{
	constructor(){
		super()
		this.getCity = this.getCity.bind(this);
	}
	async getCity(req, res, next){
		const type = req.query.type;
		let cityInfo;
		try{
			switch (type){
				case 'guess': 
					const city = await this.getCityName(req);
					cityInfo = await Cities.cityGuess(city);
					break;
				case 'hot': 
					cityInfo = await Cities.cityHot();
					break;
				case 'group': 
					cityInfo = await Cities.cityGroup();
					break;
				default: 
					res.json({
						name: 'ERROR_QUERY_TYPE',
						message: '参数错误',
					})
					return
			}
			res.send(cityInfo);
		}catch(err){
			res.send(err);
		}
	}
	async getCityById(req, res, next){
		const cityid = req.params.id;
		if (isNaN(cityid)) {
			res.json({
				name: 'ERROR_PARAM_TYPE',
				message: '参数错误',
			})
			return
		}
		try{
			const cityInfo = await Cities.getCityById(cityid);
			res.send(cityInfo);
		}catch(err){
			res.send(err);
		}
	}
	getCityName(req){
		return new Promise(async (resolve, reject) => {
			let ip = req.headers['x-forwarded-for'] || 
	 		req.connection.remoteAddress || 
	 		req.socket.remoteAddress ||
	 		req.connection.socket.remoteAddress;
	 		const ipArr = ip.split(':');
	 		ip = ipArr[ipArr.length -1];
	 		if (process.env.NODE_ENV == 'development') {
	 			ip = '116.231.55.195';
	 		}
	 		/*
	 		调用新浪接口，获取ip地址信息
	 		 */
			const url = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php';
			let res = await this.fetch(url , {format: 'js', ip,}, 'GET', 'TEXT');
			const cityInfo = JSON.parse(res.split('=')[1].toString().replace(';', ''));
			/*
			汉字转换成拼音
			 */
	        const pinyinArr = pinyin(cityInfo.city, {
			  	style: pinyin.STYLE_NORMAL,
			});
			let cityName = '';
			pinyinArr.forEach(item => {
				cityName += item[0];
			})
			resolve(cityName)
		})
	}
}
export default new CityHandle()
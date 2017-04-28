'use strict';

import Cities from '../../models/v1/cities';
import http from 'http';
import pinyin from "pinyin";  
import BaseComponent from '../../prototype/baseComponent'


class CityHandle extends BaseComponent{
	constructor(){
		super()
		this.cityGuess = this.cityGuess.bind(this);
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
				const city = await this.getCityName(req);
				cityInfo = await Cities.cityGuess(city);
				break;
			case 'hot': 
				cityInfo = await Cities.cityHot();
				break;
			case 'group': 
				cityInfo = await Cities.cityGroup();
				break;
		}
		res.send(cityInfo)
	}
	getCityName(req){
		return new Promise(async (resolve, reject) => {
			let ip = req.headers['x-forwarded-for'] || 
	 		req.connection.remoteAddress || 
	 		req.socket.remoteAddress ||
	 		req.connection.socket.remoteAddress;
	 		const ipArr = ip.split(':');
	 		ip = ipArr[ipArr.length -1];
	 		ip = '116.231.55.195';
	 		/*
	 		调用新浪接口，获取ip地址信息
	 		 */
			const url = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php';
			let res = await this.fetch('GET', url , {format: 'js', ip,}, 'TEXT');
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
'use strict';

import Cities from '../../models/v1/cities';
import http from 'http';
import pinyin from "pinyin";  
import fetch from 'node-fetch';


class CityHandle {
	constructor(){
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
	 		// ip = '116.231.55.195';
	 		/*
	 		调用新浪接口，获取ip地址信息
	 		 */
			const url = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=' + ip;
			let res;
			try{
				res = await fetch(url);
			    res = await res.text();
			}catch(err){
				console.log(err)
			}
			const cityInfo = JSON.parse(res.split('=')[1].toString().replace(';', ''))
	        const pinyinArr = pinyin(cityInfo.city, {
			  	style: pinyin.STYLE_NORMAL,
			});
			let city = '';
			pinyinArr.forEach(item => {
				city += item[0];
			})
			resolve(city)
		})
	}
}
export default new CityHandle()
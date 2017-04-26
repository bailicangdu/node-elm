'use strict';

import Cities from '../../models/v1/cities';
import http from 'http'
var pinyin = require("pinyin");  


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
		return new Promise((resolve, reject) => {
			let ip = req.headers['x-forwarded-for'] || 
	 		req.connection.remoteAddress || 
	 		req.socket.remoteAddress ||
	 		req.connection.socket.remoteAddress;
	 		const ipArr = ip.split(':');
	 		ip = ipArr[ipArr.length -1];
	     	//调用新浪接口
			http.get('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=' + ip, 
				(req,res) => {  
			    let data;  
			    req.on('data',res => {
			        res = res.toString();
			        const subIndex = res.indexOf('city');
			        data = res.substring(subIndex,res.indexOf(',', subIndex));
			        data = data.split(':')[1].replace(/"/gi, '');
			    });  
			    req.on('end',() => {  
			        data = unescape(data.replace(/\\u/g, '%u'));
			        data = pinyin(data, {
					  	style: pinyin.STYLE_NORMAL,
					});
					let city = '';
					data.forEach(item => {
						city += item[0];
					})
					resolve(city)
			    });  
			});  
		})
	}
}
export default new CityHandle()
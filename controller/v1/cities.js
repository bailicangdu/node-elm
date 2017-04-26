'use strict';

import Cities from '../../models/v1/cities';
import http from 'http'  


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
				const city = this.getCityName(req);
				// console.log(ip)
				cityInfo = await Cities.cityGuess('shanghai');
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
		const ip = req.headers['x-forwarded-for'] || 
 		req.connection.remoteAddress || 
 		req.socket.remoteAddress ||
 		req.connection.socket.remoteAddress;
     	//调用阿里云接口
		http.get('http://saip.market.alicloudapi.com/ip?ip=' + ip,function(req,res){  
		    var html='';  
		    req.on('data',function(data){  
		        html+=data;  
		    });  
		    req.on('end',function(){  
		        console.info(html);  
		    });  
		});  
	}
}
export default new CityHandle()
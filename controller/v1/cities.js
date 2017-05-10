'use strict';

import Cities from '../../models/v1/cities';
import pinyin from "pinyin";  
import AddressComponent from '../../prototype/addressComponent'


class CityHandle extends AddressComponent{
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
	async getCityName(req){
		let cityInfo;
		try{
			cityInfo = await this.guessPosition(req);
		}catch(err){
			console.error()
		}
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
		return cityName
	}
}
export default new CityHandle()